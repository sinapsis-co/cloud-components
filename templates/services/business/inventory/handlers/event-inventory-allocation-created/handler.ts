import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryAllocationEvent } from 'services/business/inventory-allocation/catalog';
import { inventoryRepo } from '../../repository/inventory';

export const handler = eventHandler<inventoryAllocationEvent.created.Event>(async (event) => {

    const allocationInventory = event.detail;

    await inventoryRepo.updateItem(
        { id: allocationInventory.inventoryId, tenantId: allocationInventory.tenantId },
        {
            status: 'NOT_AVAILABLE'
        }
    );

    return;
});