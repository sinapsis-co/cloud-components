import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryApi, inventoryEvent } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';

export const handler = apiHandler<inventoryApi.deleteInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const result = await inventoryRepo.logicalDeleteItem({ id: req.pathParams.id, tenantId: tenant });

    await dispatchEvent<inventoryEvent.inventoryDeleted.Event>(inventoryEvent.inventoryDeleted.eventConfig, {
        ...result
    });

    return result;

}, inventoryApi.deleteInventory.config);