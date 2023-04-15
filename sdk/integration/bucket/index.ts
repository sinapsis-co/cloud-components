import * as S3 from '@aws-sdk/client-s3';
import { Tracing } from '../../tracing';

export const s3 = Tracing.captureIntegration(new S3.S3Client({}));
