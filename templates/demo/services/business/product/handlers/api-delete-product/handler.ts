import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { productApi } from '../../catalog';
import { productRepo } from '../../repository/product';

export const handler = apiHandler<productApi.getProduct.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const product = await productRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!product.exists) throw new ApiError('PRODUCT_NOT_FOUND', 404, `productId: ${req.pathParams.id}`);
    if (product.entity?.deleted) throw new ApiError('PRODUCT_DELETED', 400, `productId: ${req.pathParams.id}`);

    return await productRepo.logicalDeleteItem({ id: req.pathParams.id, tenantId: tenant });

}, productApi.getProduct.config);