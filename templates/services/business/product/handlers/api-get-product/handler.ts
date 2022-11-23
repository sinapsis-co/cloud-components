import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { productApi } from '../../catalog';
import { productRepo } from '../../repository/product';

export const handler = apiHandler<productApi.getProduct.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId || '1234';

    return await productRepo.getItem({ id: req.pathParams.id, tenantId: tenant });

}, productApi.getProduct.config);