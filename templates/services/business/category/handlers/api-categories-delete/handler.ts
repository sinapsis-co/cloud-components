import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.delete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const categoryId = req.queryParams.categoryId || '';
  return await categoryRepo.deleteItem({ tenantId, id, categoryId });
}, categoryApi.delete.config);
