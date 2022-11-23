import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { productApi } from '../../catalog';
import { productRepo } from '../../repository/product';

export const handler = apiHandler<productApi.listProduct.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId || '1234';

    return await productRepo.listItem(tenant, { limit: 100 });

}, productApi.listProduct.config);