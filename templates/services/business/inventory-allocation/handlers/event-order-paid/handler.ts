import { orderEvent } from 'services/business/order/catalog';

import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';

import { inventoryAllocationEvent } from '../../catalog';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory';

export const handler = eventHandler<orderEvent.paid.Event>(async (event) => {
  const { tenantId, id, subscriptionId } = event.detail.order;

  const allocationInventory = await getAllocationInventoryByOrder(id, tenantId);

  const inventoryAllocation = await inventoryAllocationRepo.updateItem(
    { tenantId, id: allocationInventory.id },
    {
      subscriptionId,
      status: 'TO_BE_DELIVERED',
    }
  );

  if (inventoryAllocation) {
    await dispatchEvent<inventoryAllocationEvent.toBeDelivered.Event>(
      inventoryAllocationEvent.toBeDelivered.eventConfig,
      { inventoryAllocation }
    );
  }
});
