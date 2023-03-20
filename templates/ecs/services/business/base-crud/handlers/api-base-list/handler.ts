import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.list.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  return await baseRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
}, baseApi.list.config);
