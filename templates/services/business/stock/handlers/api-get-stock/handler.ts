import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { stockApi } from '../../catalog';
import { stockRepo } from '../../repository/stock';

export const handler = apiHandler<stockApi.getStock.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId || '1234';

    return await stockRepo.getItem({ id: req.pathParams.id, tenantId: tenant });

}, stockApi.getStock.config);