import * as S3 from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import stream, { Readable } from 'stream';
import { s3 } from '.';
import { Tracing } from '../../tracing';

// Streaming Methods
export const bucketStreamUpload = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  inputPipe: Readable,
  middleware: any,
  params: S3.PutObjectCommandInput,
  tracingMeta?: TracingMeta
): Promise<void> => {
  const cmd = async () => {
    const pass = new stream.PassThrough();
    const uploader = new Upload({ client: s3, params: { ...params, Body: pass } });
    inputPipe.pipe(middleware).pipe(pass);
    await uploader.done();
  };
  return await Tracing.traceableOp('StreamUpload', 'FAULT_S3_STREAM_UPLOAD', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketStreamGetObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.GetObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.GetObjectOutput> => {
  const cmd = () => s3.send(new S3.GetObjectCommand(params));
  return await Tracing.traceableOp('StreamGetObject', 'FAULT_S3_STREAM_GET_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

// Promise Methods
export const bucketPutObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.PutObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.PutObjectOutput> => {
  const cmd = () => s3.send(new S3.PutObjectCommand(params));
  return await Tracing.traceableOp('PutObject', 'FAULT_S3_PUT_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketHeadObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.HeadObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.HeadObjectOutput> => {
  const cmd = () => s3.send(new S3.HeadObjectCommand(params));
  return await Tracing.traceableOp('HeadObject', 'FAULT_S3_HEAD_OBJECT', params.Bucket!, cmd, {
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
  return await Tracing.traceableOp('GetObject', 'FAULT_S3_GET_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketDeleteObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.DeleteObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.DeleteObjectOutput> => {
  const cmd = () => s3.send(new S3.DeleteObjectCommand(params));
  return await Tracing.traceableOp('DeleteObject', 'FAULT_S3_DELETE_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketListObjects = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.ListObjectsV2Request,
  tracingMeta?: TracingMeta
): Promise<S3.ListObjectsV2Output> => {
  const cmd = () => s3.send(new S3.ListObjectsV2Command(params));
  return Tracing.traceableOp('ListObjects', 'FAULT_S3_LIST_OBJECT', params.Bucket!, cmd, tracingMeta);
};
