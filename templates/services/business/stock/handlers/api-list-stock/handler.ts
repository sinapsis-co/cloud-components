import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { stockApi } from '../../catalog';
import { stockRepo } from '../../repository/stock';

export const handler = apiHandler<stockApi.listStock.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    return await stockRepo.listItem(tenant, { limit: 100 });

}, stockApi.listStock.config);