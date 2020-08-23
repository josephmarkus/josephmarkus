/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_BUCKET_NAME,
      },
    },
  ],
}
