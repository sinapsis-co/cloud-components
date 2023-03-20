import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { inventoryApi } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';

export const handler = apiHandler<inventoryApi.listInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    return await inventoryRepo.listItem(tenant, { limit: 100 });

}, inventoryApi.listInventory.config);