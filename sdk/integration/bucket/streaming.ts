import * as S3 from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import stream, { Readable } from 'stream';
import { Tracing } from 'tracing';
import { s3 } from '.';

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
  return Tracing.capture('StreamUpload', 'FAULT_S3_STREAM_UPLOAD', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};

export const bucketStreamGetObject = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: S3.GetObjectRequest,
  tracingMeta?: TracingMeta
): Promise<S3.GetObjectOutput> => {
  const cmd = () => s3.send(new S3.GetObjectCommand(params));
  return Tracing.capture('StreamGetObject', 'FAULT_S3_STREAM_GET_OBJECT', params.Bucket!, cmd, {
    key: params.Key!,
    ...tracingMeta,
  });
};
