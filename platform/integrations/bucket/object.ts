import * as S3 from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import AwsXRay from 'aws-xray-sdk-core';
import stream, { Readable } from 'stream';
import { s3 } from '.';
import { HandledFault } from '../../util/handled-exception';

const traceableOp = async <T, TracingMeta extends Record<string, string> = Record<string, string>>(
  opName: string,
  fn: (params: any) => Promise<T>,
  params: any,
  tracingMeta?: TracingMeta
): Promise<T> => {
  return AwsXRay.captureAsyncFunc(`${opName}: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const result = await fn(params).catch((e) => {
      innerSubsegment?.close();
      throw new HandledFault({ code: 'FAULT_S3_OPERATION', detail: e.message, meta: { op: opName, ...tracingMeta } });
    });
    innerSubsegment?.close();
    return result;
  });
};

const streamToString = (stream: Readable): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream!.on('data', (chunk: any) => chunks.push(chunk));
    stream!.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });

export const test = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.PutObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.PutObjectOutput> => {
  return traceableOp('PutObject', s3.send, new S3.PutObjectCommand(params), tracingMeta);
  // return AwsXRay.captureAsyncFunc(`PutObject: ${params.Bucket}`, async (innerSubsegment) => {
  //   innerSubsegment!.addAnnotation('key', params.Key!);
  //   if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
  //   const r = await s3.send(new S3.PutObjectCommand(params));
  //   innerSubsegment?.close();
  //   return r;
  // });
};

// Streaming Methods
export const bucketStreamUpload = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  inputPipe: Readable,
  middleware: any,
  params: S3.PutObjectCommandInput,
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

export const bucketStreamGetObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
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
): Promise<S3.GetObjectOutput & { Body: string }> => {
  return AwsXRay.captureAsyncFunc(`GetObject: ${params.Bucket}`, async (innerSubsegment) => {
    innerSubsegment!.addAnnotation('key', params.Key!);
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const { Body, ...att } = await s3.send(new S3.GetObjectCommand(params));
    const bodyContents: string = await streamToString(Body as Readable);
    innerSubsegment?.close();
    return { Body: bodyContents, ...att };
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
