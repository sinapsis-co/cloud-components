import { PresignedPost } from '@sinapsis-co/cc-sdk/integration/bucket/presigned';
export type PresignedPutUrl = {
  assetUrl?: string;
  presignedPost: PresignedPost;
};
