import { PresignedPost } from 'aws-sdk/clients/s3';

export type PresignedPutUrl = {
  assetUrl?: string;
  presignedPost: PresignedPost;
};
