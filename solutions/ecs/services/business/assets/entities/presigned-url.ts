import { PresignedPost } from '@sinapsis-co/cc-sdk/integration/store/bucket/presigned';
export type PresignedPutUrl = {
  assetUrl?: string;
  presignedPost: PresignedPost;
};
