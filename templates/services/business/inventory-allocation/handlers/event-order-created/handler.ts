import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { orderIncomePending } from 'services/business/order/catalog/event/income';
import { inventoryAllocationEvent } from '../../catalog';
import { getFirstInventoryByCategoryId } from '../../platform/list-inventories';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = eventHandler<orderIncomePending.Event>(async (event) => {
  const { tenantId, orderId } = event.detail;
  const categoryId = event.detail.orderItem[0].orderItemCategory || '';
  //TODO: filter inventory not_available
  const inventory = await getFirstInventoryByCategoryId(categoryId, tenantId);

  const inventoryAllocation = await inventoryAllocationRepo.createItem(
    { tenantId, id: uuid() },
    {
      userId: tenantId,
      orderId,
      orders: [orderId],
      inventoryId: inventory.id,
      inventory: { product: inventory.product!, place: inventory.place! },
      status: 'RESERVED',
    }
  );

  await dispatchEvent<inventoryAllocationEvent.created.Event>(
    inventoryAllocationEvent.created.eventConfig,
    inventoryAllocation
  );
});
