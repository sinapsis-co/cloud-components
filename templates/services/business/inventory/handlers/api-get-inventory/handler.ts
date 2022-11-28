import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryApi } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';

export const handler = apiHandler<inventoryApi.getInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    return await inventoryRepo.getItem({ id: req.pathParams.id, tenantId: tenant });

}, inventoryApi.getInventory.config);