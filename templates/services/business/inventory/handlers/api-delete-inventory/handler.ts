import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryApi, inventoryEvent } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';

export const handler = apiHandler<inventoryApi.deleteInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const inventory = await inventoryRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!inventory.exists) throw new ApiError('INVENTORY_NOT_FOUND', 404);
    if (inventory.entity?.deleted) throw new ApiError('INVENTORY_ALREADY_DELETED', 400);

    const result = await inventoryRepo.logicalDeleteItem({ id: req.pathParams.id, tenantId: tenant });

    await dispatchEvent<inventoryEvent.inventoryDeleted.Event>(inventoryEvent.inventoryDeleted.eventConfig, {
        ...result
    });

    return result;

}, inventoryApi.deleteInventory.config);