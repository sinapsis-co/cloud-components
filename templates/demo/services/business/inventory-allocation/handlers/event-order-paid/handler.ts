import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { orderIncomePaid } from 'services/business/order/catalog/event/income';
import { inventoryAllocationEvent } from '../../catalog';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory-by-order';
import { getAllocationInventoryBySubscription } from '../../platform/allocation-inventory-by-subscription';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = eventHandler<orderIncomePaid.Event>(async (event) => {
  const { tenantId, orderId, subscriptionId } = event.detail;

  const isRenovation = await getAllocationInventoryBySubscription(subscriptionId!, tenantId);

  if (isRenovation.exist) {
    await inventoryAllocationRepo.updateItem(
      { tenantId, id: isRenovation.entity?.id || '' },
      {
        orderId,
        orders: [...(isRenovation.entity?.orders || []), orderId],
      }
    );
  } else {
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
  }
});
