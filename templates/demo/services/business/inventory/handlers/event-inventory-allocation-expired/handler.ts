import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { inventoryAllocationEvent } from 'services/business/inventory-allocation/catalog';
import { inventoryEvent } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';

export const handler = eventHandler<inventoryAllocationEvent.expired.Event>(async (event) => {

    const allocationInventory = event.detail;

    const result = await inventoryRepo.updateItem(
        { id: allocationInventory.inventoryId, tenantId: allocationInventory.tenantId },
        {
            status: 'AVAILABLE'
        }
    );

    await dispatchEvent<inventoryEvent.inventoryUpdated.Event>(inventoryEvent.inventoryUpdated.eventConfig, {
        ...result
    });

    return;
});