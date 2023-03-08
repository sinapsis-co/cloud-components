import { SQSClient } from '@aws-sdk/client-sqs';
import AwsXRay from 'aws-xray-sdk-core';

export const sqs = AwsXRay.captureAWSv3Client(new SQSClient({}));
