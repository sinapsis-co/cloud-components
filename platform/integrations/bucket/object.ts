import * as S3 from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { s3 } from '.';
import { Tracing } from '../../tracing';

export const bucketPutObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.PutObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.PutObjectOutput> => {
  const cmd = () => s3.send(new S3.PutObjectCommand(params));
  return Tracing.capture('PutObject', 'FAULT_S3_PUT_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketHeadObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.HeadObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.HeadObjectOutput> => {
  const cmd = () => s3.send(new S3.HeadObjectCommand(params));
  return Tracing.capture('HeadObject', 'FAULT_S3_HEAD_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketGetObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.GetObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.GetObjectOutput & { Body: string }> => {
  const streamToString = (stream: Readable): Promise<string> =>
    new Promise((resolve, reject) => {
      const chunks: any[] = [];
      stream!.on('data', (chunk: any) => chunks.push(chunk));
      stream!.on('error', reject);
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });

  const cmd = async () => {
    const { Body, ...att } = await s3.send(new S3.GetObjectCommand(params));
    const bodyContents: string = await streamToString(Body as Readable);
    return { Body: bodyContents, ...att };
  };
  return Tracing.capture('GetObject', 'FAULT_S3_GET_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketDeleteObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.DeleteObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.DeleteObjectOutput> => {
  const cmd = () => s3.send(new S3.DeleteObjectCommand(params));
  return Tracing.capture('DeleteObject', 'FAULT_S3_DELETE_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketListObjects = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.ListObjectsV2Request,
  tracingMeta?: TracingMeta
): Promise<S3.ListObjectsV2Output> => {
  const cmd = () => s3.send(new S3.ListObjectsV2Command(params));
  return Tracing.capture('ListObjects', 'FAULT_S3_LIST_OBJECT', params.Bucket!, cmd, tracingMeta);
};
