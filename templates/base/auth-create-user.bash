#!/bin/bash

if [ "$1" = "help" ]; then
  echo 'USAGE: yarn create-user {env} {EMAIL_PREFIX} {PASSWORD} {NAME} {LAST_NAME} {EMAIL_SUFFIX} {COGNITO_WEB_CLIENT_ID}'
  echo 'EXAMPLE: yarn create-user dev david Test1234 david lara 1 62mh1esoop465skp9mt4d1eu3v'
  exit 0
fi

PROJECT_BASE_PATH=$(pwd)
ENV_NAME=${1}
COGNITO_WEB_CLIENT_ID=${2}
EMAIL_PREFIX=${3}
PASS=${4}
NAME=${5}
LAST_NAME=${6}
EMAIL_SUFFIX=${7}

if [ -z "$EMAIL_PREFIX" ]; then
  echo 'email prefix is required'
  exit 1
fi

if [ -z "$PASS" ]; then
  echo 'password is required'
  exit 1
fi

if [ -z "$COGNITO_WEB_CLIENT_ID" ]; then
  echo 'cognito web client id is required'
  exit 1
fi

if [ -z "$EMAIL_SUFFIX" ]; then
  EMAIL_SUFFIX=1
fi

REGION=us-east-1
EMAIL_POSTFIX=@sinapsis.co

# COGNITO_WEB_CLIENT_ID=67lls0mjqen8jacoi5p85bh7bi

EMAIL=$EMAIL_PREFIX+$EMAIL_SUFFIX$EMAIL_POSTFIX

ATT_EMAIL=Name=email,Value=$EMAIL
ATT_G_NAME=Name=given_name,Value=$NAME
ATT_F_NAME=Name=family_name,Value=$LAST_NAME
# ATT_CM_NAME=Name=custom:companyName,Value=Sinapsis

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
