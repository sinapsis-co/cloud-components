import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { inventoryApi, inventoryEvent } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';

export const handler = apiHandler<inventoryApi.updateInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const inventory = await inventoryRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!inventory.exists) throw new ApiError('INVENTORY_NOT_FOUND', 404);
    if (inventory.entity?.deleted) throw new ApiError('INVENTORY_DELETED', 400);
    if (inventory.entity?.status === 'NOT_AVAILABLE') throw new ApiError('INVENTORY_RESERVED', 400, `inventoryId: ${req.pathParams.id}`);

    const result = await inventoryRepo.updateItem({ id: req.pathParams.id, tenantId: tenant }, { ...req.body });

    await dispatchEvent<inventoryEvent.inventoryUpdated.Event>(inventoryEvent.inventoryUpdated.eventConfig, {
        ...result
    });

    return result;
}, inventoryApi.updateInventory.config);