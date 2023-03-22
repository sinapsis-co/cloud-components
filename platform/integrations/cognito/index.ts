import { AttributeType, CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import AwsXRay from 'aws-xray-sdk-core';

export type AttributeListType = AttributeType[];

export const cognito: CognitoIdentityProviderClient = AwsXRay.captureAWSv3Client(
  new CognitoIdentityProviderClient({}) as any
);
