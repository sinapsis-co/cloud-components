import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryAllocationEvent } from 'services/business/inventory-allocation/catalog';
import { inventoryEvent } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';

export const handler = eventHandler<inventoryAllocationEvent.created.Event>(async (event) => {

    const allocationInventory = event.detail;

    const result = await inventoryRepo.updateItem(
        { id: allocationInventory.inventoryId, tenantId: allocationInventory.tenantId },
        {
            status: 'NOT_AVAILABLE'
        }
    );

    await dispatchEvent<inventoryEvent.inventoryUpdated.Event>(inventoryEvent.inventoryUpdated.eventConfig, {
        ...result
    });

    return;
});