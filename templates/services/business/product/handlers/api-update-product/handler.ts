import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { productApi } from '../../catalog';
import { getCategory } from '../../platform/category';
import { productRepo } from '../../repository/product';

export const handler = apiHandler<productApi.updateProduct.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const product = await productRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!product.exists) throw new ApiError('PRODUCT_NOT_FOUND', 404);
    if (product.entity?.deleted) throw new ApiError('PRODUCT_DELETED', 400);

    if (req.body.categoryId) {
        const category = await getCategory(req.body.categoryId, tenant);
        req.body.category = {
            id: category.id,
            name: category.name
        };
    }

    return await productRepo.updateItem({ id: req.pathParams.id, tenantId: tenant }, { ...req.body });

}, productApi.updateProduct.config);