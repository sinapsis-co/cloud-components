import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/repo-base';

export const handler = apiHandler<baseApi.list.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  return await baseRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
}, baseApi.list.config);
