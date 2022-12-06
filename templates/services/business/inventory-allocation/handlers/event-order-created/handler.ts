import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { orderEvent } from 'services/business/order/catalog';
import { getFirstInventoryByCategoryId } from '../../platform/list-inventories';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { inventoryAllocationEvent } from '../../catalog';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';

export const handler = eventHandler<orderEvent.created.Event>(async (event) => {
  const { tenantId, userId, id, category } = event.detail.order;
  const categoryId = category?.id || '';

  //TODO: filter inventory not_available
  const inventory = await getFirstInventoryByCategoryId(categoryId, tenantId);

  const inventoryAllocation = await inventoryAllocationRepo.createItem(
    { tenantId, id: uuid() },
    {
      userId,
      orderId: id,
      orders: [id],
      inventoryId: inventory.id,
      inventory: { product: inventory.product!, place: inventory.place! },
      status: 'RESERVED',
    }
  );

  if (inventoryAllocation) {
    await dispatchEvent<inventoryAllocationEvent.created.Event>(
      inventoryAllocationEvent.created.eventConfig,
      inventoryAllocation
    );
  }
});
