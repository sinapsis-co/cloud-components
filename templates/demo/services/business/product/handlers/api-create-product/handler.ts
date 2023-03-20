import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { productApi } from '../../catalog';
import { getCategory } from '../../platform/category';
import { productRepo } from '../../repository/product';

export const handler = apiHandler<productApi.createProduct.Interface>(async (_, req) => {

  const tenant = req.claims.tenantId;

  const category = await getCategory(req.body.categoryId || '', tenant);

  return await productRepo.createItem({ id: uuid(), tenantId: tenant }, {
    ...req.body,
    category: { id: category.id, name: category.name }
  });

}, productApi.createProduct.config);