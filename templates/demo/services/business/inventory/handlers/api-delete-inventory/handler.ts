import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { inventoryApi, inventoryEvent } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';

export const handler = apiHandler<inventoryApi.deleteInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const inventory = await inventoryRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!inventory.exists) throw new ApiError('INVENTORY_NOT_FOUND', 404, `inventoryId: ${req.pathParams.id}`);
    if (inventory.entity?.deleted) throw new ApiError('INVENTORY_ALREADY_DELETED', 400, `inventoryId: ${req.pathParams.id}`);
    if (inventory.entity?.status === 'NOT_AVAILABLE') throw new ApiError('INVENTORY_RESERVED', 400, `inventoryId: ${req.pathParams.id}`);

    const result = await inventoryRepo.logicalDeleteItem({ id: req.pathParams.id, tenantId: tenant });

    await dispatchEvent<inventoryEvent.inventoryDeleted.Event>(inventoryEvent.inventoryDeleted.eventConfig, {
        ...result
    });

    return result;

}, inventoryApi.deleteInventory.config);