#!/bin/bash

CURRENT_PATH=$(pwd)
AWS_PROFILE="default"
#bucket name is microserviceangular

function upload_website_to_s3()
{
  printf "~ uploading app to S3 ..."

  # upload to s3
  myCmd="aws s3 cp src/ \
  s3://microserviceangular/ \
  --profile $AWS_PROFILE --recursive"

  message=$(${myCmd[@]} 2>&1 | grep -i 'error')

  if [[ $message ]]; then
    printf "\t[FAIL]\n"
    echo $message
    exit -1
  fi

 # upload to s3
 myCmd="aws s3 cp node_modules \
 s3://microserviceangular/node_modules/ \
 --profile $AWS_PROFILE --recursive"

 message=$(${myCmd[@]} 2>&1 | grep -i 'error')

  if [[ $message ]]; then
    printf "\t[FAIL]\n"
    echo $message
    exit -1
  fi

  printf "\t[OK]\n"
}

# upload the cf template to s3 for reference
upload_website_to_s3
