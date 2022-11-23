import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.get.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await categoryRepo.getItem({ tenantId, id: req.pathParams.id, categoryId: req.queryParams.categoryId || '' });
}, categoryApi.get.config);
