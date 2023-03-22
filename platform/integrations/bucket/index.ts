import * as S3 from '@aws-sdk/client-s3';
import AwsXRay from 'aws-xray-sdk-core';

export const s3 = AwsXRay.captureAWSv3Client(new S3.S3Client({}));
