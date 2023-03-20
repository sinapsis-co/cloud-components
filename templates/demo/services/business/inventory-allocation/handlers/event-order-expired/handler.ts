import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { orderIncomeExpired } from 'services/business/order/catalog/event/income';
import { inventoryAllocationEvent } from '../../catalog';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory-by-order';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = eventHandler<orderIncomeExpired.Event>(async (event) => {
  const { orderId, tenantId } = event.detail;

  const inventoryAllocation = await getAllocationInventoryByOrder(orderId, tenantId);

  await inventoryAllocationRepo.updateItem(
    { tenantId: tenantId, id: inventoryAllocation.id },
    {
      status: 'EXPIRED',
    }
  );

  await dispatchEvent<inventoryAllocationEvent.expired.Event>(
    inventoryAllocationEvent.expired.eventConfig,
    inventoryAllocation
  );

  return;
});
