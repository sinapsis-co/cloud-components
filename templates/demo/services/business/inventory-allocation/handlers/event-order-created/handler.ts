import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { orderIncomePending } from 'services/business/order/catalog/event/income';
import { inventoryAllocationEvent } from '../../catalog';
import { getFirstInventoryByCategoryId } from '../../platform/list-inventories';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = eventHandler<orderIncomePending.Event>(async (event) => {
  const { tenantId, orderId, billingReason } = event.detail;

  if (billingReason === 'SUBSCRIPTION_CYCLE') return;

  await Promise.all(
    event.detail.orderItem.map(async (orderItem) => {
      const categoryId = orderItem.orderItemCategory as string;

      // add filter by place id
      const inventory = await getFirstInventoryByCategoryId(categoryId, tenantId);

      const inventoryAllocation = await inventoryAllocationRepo.createItem(
        { tenantId, id: uuid() },
        {
          userId: tenantId,
          orderId,
          orders: [orderId],
          inventoryId: inventory.id,
          inventory: { product: inventory.product!, place: inventory.place! },
          categoryId,
          placeId: inventory.placeId,
          status: 'RESERVED',
        }
      );

      await dispatchEvent<inventoryAllocationEvent.created.Event>(
        inventoryAllocationEvent.created.eventConfig,
        inventoryAllocation
      );
    })
  );
});
