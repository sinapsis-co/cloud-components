import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { awsUserRepo } from '../../repository/aws-user';

export const handler = apiHandler<awsApi.userGet.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await awsUserRepo.getItem({ tenantId, id: req.pathParams.id });
}, awsApi.userGet.config);
