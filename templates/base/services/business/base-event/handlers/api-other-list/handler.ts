import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { otherApi } from '../../catalog';
import { otherRepo } from '../../repository/other';

export const handler = apiHandler<otherApi.list.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  return await otherRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
}, otherApi.list.config);
