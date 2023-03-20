import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';

export const errorApi = ({
  message,
  statusCode,
  description,
}: {
  message: string;
  statusCode: number;
  description?: string;
}): ApiError => {
  return new ApiError(message, statusCode, description);
};
