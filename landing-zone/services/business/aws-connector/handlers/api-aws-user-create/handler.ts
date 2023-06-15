import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { awsApi } from '../../catalog';
import { createAwsUser } from '../../platform/users/create-aws-user';
import { awsUserRepo } from '../../repository/aws-user';

export const handler = apiHandler<awsApi.userCreate.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { accessKeyId } = await createAwsUser(req.body);
  return await awsUserRepo.createItem({ tenantId, id: uuid() }, { accessKeyId, ...req.body });
}, awsApi.userCreate.config);
