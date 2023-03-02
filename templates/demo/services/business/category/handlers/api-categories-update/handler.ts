import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { categoryApi } from '../../catalog';
import { categoryRepo } from '../../repository/category-repository';

export const handler = apiHandler<categoryApi.update.Interface>(async (_, req) => {
  const tenantId = req.claims.tenantId;
  const { id } = req.pathParams;

  if (req.body.categoryId) {
    const category = await categoryRepo.checkItemExists({ id: req.body.categoryId, tenantId });
    if (!category.exists) throw new ApiError('CATEGORY_ID.NOT_FOUND', 404, `categoryId: ${req.body.categoryId}`);
    if (category.entity?.deleted) throw new ApiError('CATEGORY_ID.DELETED', 400, `categoryId: ${req.body.categoryId}`);
    return await categoryRepo.updateItem({ tenantId, id }, {
      ...req.body,
      category: { id: category.entity?.id || '', name: category.entity?.name || '' }
    });
  }
  return await categoryRepo.updateItem({ tenantId, id }, req.body);
}, categoryApi.update.config);
