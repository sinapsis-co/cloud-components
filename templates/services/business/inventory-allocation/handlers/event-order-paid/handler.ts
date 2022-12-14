import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';

import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { orderIncomePaid } from 'services/business/order/catalog/event/income';
import { inventoryAllocationEvent } from '../../catalog';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = eventHandler<orderIncomePaid.Event>(async (event) => {
  const { tenantId, orderId, subscriptionId } = event.detail;

  //TODO: add logic when subscription is renovated

  const allocationInventory = await getAllocationInventoryByOrder(orderId, tenantId);

  const inventoryAllocation = await inventoryAllocationRepo.updateItem(
    { tenantId, id: allocationInventory.id },
    {
      subscriptionId,
      status: 'TO_BE_DELIVERED',
    }
  );

  await dispatchEvent<inventoryAllocationEvent.toBeDelivered.Event>(
    inventoryAllocationEvent.toBeDelivered.eventConfig,
    { inventoryAllocation }
  );
});
