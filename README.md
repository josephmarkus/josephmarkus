Read env vars, login to AWS, build and deploy

```sh
set -a && source .env && set +a
aws sso login --profile $AWS_PROFILE
./scripts/deploy.sh
```
