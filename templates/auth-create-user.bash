#!/bin/bash

if [ "$1" = "help" ]; then
  echo 'USAGE: yarn create-user {env} {EMAIL_PREFIX} {PASSWORD} {NAME}'
  echo 'EXAMPLE: yarn env create-user andres new_password new_username'
  exit 0
fi

PROJECT_BASE_PATH=$(pwd)
ENV_NAME=${1}
EMAIL_PREFIX=${2}
PASS=${3}
NAME=${4}

if [ -z "$NAME" ]; then
  echo 'name is required'
  exit 1
fi

COMMON=$PROJECT_BASE_PATH/node_modules/@sinapsis-co/cdk/dist/common
REGION=us-east-1
EMAIL_POSTFIX=@sinapsis.co

COGNITO_WEB_CLIENT_ID=4s0v7tp51fbmur5kt2gsps39g2

EMAIL=$EMAIL_PREFIX+$NAME$EMAIL_POSTFIX

ATT_EMAIL=Name=email,Value=$EMAIL
ATT_G_NAME=Name=given_name,Value=$NAME
ATT_F_NAME=Name=family_name,Value=$NAME
ATT_CM_NAME=Name=custom:companyName,Value=Sinapsis
# ATT_CM_NAME=Name=custom:companyName,Value=d9a256dd-b601-49d2-8572-6382fe1400a6#acc1c350-6b51-4e6e-b86e-454b33ca85ff

export AWS_DEFAULT_REGION=$REGION

RESPONSE=$(aws cognito-idp sign-up \
  --client-id $COGNITO_WEB_CLIENT_ID \
  --username $EMAIL \
  --password $PASS \
  --user-attributes $ATT_EMAIL $ATT_G_NAME $ATT_F_NAME $ATT_CM_NAME)

if [ $? -eq 0 ]; then
  echo "org: $NAME"
  echo "email: $EMAIL"
  echo "pass: $PASS"
else
  echo $RESPONSE
fi
