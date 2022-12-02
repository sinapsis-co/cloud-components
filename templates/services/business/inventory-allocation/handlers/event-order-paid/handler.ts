import { orderEvent } from 'services/business/order/catalog';

import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';

import { inventoryAllocationEvent } from '../../catalog';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';

export const handler = eventHandler<orderEvent.paid.Event>(async (event) => {
  const { tenantId, id } = event.detail.order;
  const inventoryAllocation = await inventoryAllocationRepo.updateItem(
    { tenantId, orderId: id },
    {
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
