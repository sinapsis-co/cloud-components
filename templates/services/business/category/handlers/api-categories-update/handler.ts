import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.update.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const categoryId = req.body.categoryId!;
  return await categoryRepo.updateItem({ tenantId, id, categoryId }, req.body);
}, categoryApi.update.config);
