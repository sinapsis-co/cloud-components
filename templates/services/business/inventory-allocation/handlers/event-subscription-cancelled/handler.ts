import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { Canceled } from 'services/business/stripe-subscription/catalog/event';
import { inventoryAllocationEvent } from '../../catalog';
import { getAllocationInventoryBySubscription } from '../../platform/allocation-inventory-by-subscription';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = eventHandler<Canceled.Event>(async (event) => {
  const { tenantId, subscription } = event.detail;

  const getSubscription = await getAllocationInventoryBySubscription(subscription.subscriptionId!, tenantId);
  if (!getSubscription.entity?.id) return;

  const inventoryAllocation = await inventoryAllocationRepo.updateItem(
    { tenantId, id: getSubscription.entity.id },
    {
      status: 'CANCELLED',
    }
  );

  await dispatchEvent<inventoryAllocationEvent.cancelled.Event>(
    inventoryAllocationEvent.cancelled.eventConfig,
    inventoryAllocation
  );
});
