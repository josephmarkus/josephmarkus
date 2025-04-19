#!/bin/bash

SOURCE_FOLDER="../build/assets/"
BUILD_DIR="./build"
HTML_FILE="../build/index.html"
S3_BUCKET=s3://josephmarkus.co.uk
S3_BUCKET_ASSETS="$S3_BUCKET/assets"
# 31536000 seconds = 365 days
IMAGE_CACHE="max-age=31536000, immutable"

# Array to store mapping of original to hashed filenames
orig_files=()
hashed_files=()

# Remove last build before proceeding
if [ -d "$BUILD_DIR" ]; then
    echo "Removing build directory"
    rm -rf  $BUILD_DIR;
else
    echo "No build directory"
fi

# Copy files to the working directory
mkdir -p ./build/assets
cp -r ./assets ./build
cp ./index.html ./build

# Apply content-base hashing to files in the working directory
cd ./build

hash_and_rename() {
    FILE_PATH=$1
    # Get filename without path
    FILENAME=$(basename "$FILE_PATH")
    # Get directory path
    DIR_PATH=$(dirname "$FILE_PATH")

    # Get file extension and basename
    EXT="${FILENAME##*.}"
    BASENAME="${FILENAME%.*}"

    # Calculate content hash (MD5)
    if command -v md5sum &> /dev/null; then
        HASH=$(md5sum "$FILE_PATH" | cut -d' ' -f1 | head -c 8)
    else
        HASH=$(md5 -q "$FILE_PATH" | head -c 8)
    fi

    # Create new filename with hash
    NEW_FILENAME="${BASENAME}.${HASH}.${EXT}"

    NEW_FILE_PATH="${DIR_PATH}/${NEW_FILENAME}"

    # Copy the file with the new name
    mv "$FILE_PATH" "$NEW_FILE_PATH"

    echo "$NEW_FILENAME"
}

# Process images
for IMG_FILE in $SOURCE_FOLDER/*.{png,svg,jpeg}; do
    if [ -f "$IMG_FILE" ]; then
        filename=$(basename "$IMG_FILE")
        hashed_file=$(hash_and_rename "$IMG_FILE")
        
        orig_files+=("$filename")
        hashed_files+=("$hashed_file")
    fi
done

if [ -f "$HTML_FILE" ]; then
    echo "Updating references in $HTML_FILE"

    # Create a temporary file for the updates
    TMP_FILE=$(mktemp)

    # Copy the HTML content to the temporary file
    cp "$HTML_FILE" "$TMP_FILE"

    # Update all file references
    for i in "${!orig_files[@]}"; do
        orig_file="${orig_files[$i]}"
        hashed_file="${hashed_files[$i]}"

        echo "Replacing: '$orig_file' with '$hashed_file'"

        sed -i '' "s|$orig_file|$hashed_file|g" "$TMP_FILE"
    done

    # Move the temporary file back to the original
    mv "$TMP_FILE" "$HTML_FILE"
else 
    echo "Error: index.html not found in current directory"
    exit 1
fi

aws s3 cp --profile $AWS_PROFILE $SOURCE_FOLDER $S3_BUCKET_ASSETS --exclude="*" --include "*.png" --cache-control "$IMAGE_CACHE" --content-type "image/png" --recursive
aws s3 cp --profile $AWS_PROFILE $SOURCE_FOLDER $S3_BUCKET_ASSETS --exclude="*" --include "*.svg" --cache-control "$IMAGE_CACHE" --content-type "image/svg+xml" --recursive
aws s3 cp --profile $AWS_PROFILE $SOURCE_FOLDER $S3_BUCKET_ASSETS --exclude "*" --include "*.jpeg" --cache-control "$IMAGE_CACHE" --content-type "image/jpeg" --recursive

# no-cache directive will force validation with the server before using a cached version
aws s3 cp --profile $AWS_PROFILE $HTML_FILE $S3_BUCKET --cache-control "max-age=60, must-revalidate" --content-type "text/html"

aws cloudfront create-invalidation --profile $AWS_PROFILE --distribution-id $DISTRIBUTION_ID --paths "/index.html"