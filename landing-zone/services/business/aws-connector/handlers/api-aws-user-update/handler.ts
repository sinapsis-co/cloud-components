import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { updateAwsUser } from '../../platform/users/update-aws-user';
import { awsUserRepo } from '../../repository/aws-user';

export const handler = apiHandler<awsApi.userUpdate.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const user = await awsUserRepo.updateItem({ tenantId, id }, req.body);
  await updateAwsUser(user);
  return user;
}, awsApi.userUpdate.config);
