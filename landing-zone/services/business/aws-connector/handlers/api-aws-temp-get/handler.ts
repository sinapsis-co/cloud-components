import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { awsTempRepo } from '../../repository/aws-temp-cred';

export const handler = apiHandler<awsApi.userGetTempCredentials.Interface>(async (_, req) => {
  const { id } = req.pathParams;
  return await awsTempRepo.deleteItem({ id }).catch(() => {
    throw new ApiError(
      'InvalidCredential',
      400,
      'Your temporal credential was already fetched or expired. Please contact the Administrator'
    );
  });
}, awsApi.userGetTempCredentials.config);
