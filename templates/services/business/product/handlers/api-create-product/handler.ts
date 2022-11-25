import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { productApi } from '../../catalog';
import { productRepo } from '../../repository/product';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { getCategory } from '../../platform/category';

export const handler = apiHandler<productApi.createProduct.Interface>(async (_, req) => {

  const tenant = req.claims.tenantId || '1234';

  const category = await getCategory(req.body.categoryId, tenant);

  return await productRepo.createItem({ id: uuid(), tenantId: tenant }, {
    ...req.body,
    category: { id: category.id, name: category.name }
  });

}, productApi.createProduct.config);