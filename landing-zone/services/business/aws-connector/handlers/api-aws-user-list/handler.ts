import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { awsApi } from '../../catalog';
import { awsUserRepo } from '../../repository/aws-user';

export const handler = apiHandler<awsApi.userList.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  return await awsUserRepo.listItem(`user#${tenantId}`, { limit: Number(limit) || 50, nextToken });
}, awsApi.userList.config);
