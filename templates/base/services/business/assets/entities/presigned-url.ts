import { PresignedPost } from '@sinapsis-co/cc-platform-v2/integrations/bucket/presigned';
export type PresignedPutUrl = {
  assetUrl?: string;
  presignedPost: PresignedPost;
};
