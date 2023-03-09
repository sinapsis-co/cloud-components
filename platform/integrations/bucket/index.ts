import * as S3 from '@aws-sdk/client-s3';
import { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import AwsXRay from 'aws-xray-sdk-core';
import stream, { Readable } from 'stream';

const singleton = new S3.S3Client({});
export const s3 = AwsXRay.captureAWSv3Client(singleton);

export const bucketPutObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.PutObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.PutObjectOutput> => {
  return AwsXRay.captureAsyncFunc(`PutObject: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const r = await s3.send(new S3.PutObjectCommand(params));
    innerSubsegment?.close();
    return r;
  });
};

export const bucketStreamUpload = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  inputPipe: Readable,
  middleware: any,
  params: PutObjectCommandInput,
  tracingMeta?: TracingMeta
): Promise<void> => {
  return AwsXRay.captureAsyncFunc(`StreamUpload: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const pass = new stream.PassThrough();
    const uploader = new Upload({ client: s3, params: { ...params, Body: pass } });
    inputPipe.pipe(middleware).pipe(pass);
    await uploader.done();
    innerSubsegment?.close();
  });
};

export const bucketHeadObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.HeadObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.HeadObjectOutput> => {
  return AwsXRay.captureAsyncFunc(`HeadObject: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const r = await s3.send(new S3.HeadObjectCommand(params));
    innerSubsegment?.close();
    return r;
  });
};
export const bucketGetObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.GetObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.GetObjectOutput> => {
  return AwsXRay.captureAsyncFunc(`GetObject: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const r = await s3.send(new S3.GetObjectCommand(params));
    innerSubsegment?.close();
    return r;
  });
};

export const bucketDeleteObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.DeleteObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.DeleteObjectOutput> => {
  return AwsXRay.captureAsyncFunc(`DeleteObject: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const r = await s3.send(new S3.DeleteObjectCommand(params));
    innerSubsegment?.close();
    return r;
  });
};

export const bucketListObjects = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.ListObjectsV2Request,
  tracingMeta?: TracingMeta
): Promise<S3.ListObjectsV2Output> => {
  return AwsXRay.captureAsyncFunc(`ListObjects: ${params.Bucket}`, async (innerSubsegment) => {
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const r = await s3.send(new S3.ListObjectsV2Command(params));
    innerSubsegment?.close();
    return r;
  });
};
