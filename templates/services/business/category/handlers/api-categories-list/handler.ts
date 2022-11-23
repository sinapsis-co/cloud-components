import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.list.Interface>(async (_, req) => {
  const tenantId = req.claims.tenantId || '1234';
  const { limit, nextToken } = req.queryParams;
  return await categoryRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
}, categoryApi.list.config);
