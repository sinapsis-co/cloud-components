
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';

import { inventoryAllocationEvent } from '../../catalog';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory';
import { orderIncomeExpired } from 'services/business/order/catalog/event/income';

export const handler = eventHandler<orderIncomeExpired.Event>(async (event) => {
  const { tenantId, orderId, subscriptionId } = event.detail;

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
