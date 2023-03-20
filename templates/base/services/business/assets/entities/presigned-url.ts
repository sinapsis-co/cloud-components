import { PresignedPost } from '@sinapsis-co/cc-platform/integrations/bucket/presigned';
export type PresignedPutUrl = {
  assetUrl?: string;
  presignedPost: PresignedPost;
};
