
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryAllocationEvent } from '../../catalog';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory';
import { orderIncomeExpired } from 'services/business/order/catalog/event/income';

export const handler = eventHandler<orderIncomeExpired.Event>(async (event) => {

  const { orderId, tenantId } = event.detail;

  const inventoryAllocation = await getAllocationInventoryByOrder(orderId, tenantId);

  await inventoryAllocationRepo.updateItem(
    { tenantId: tenantId, id: inventoryAllocation.id },
    {
      status: 'EXPIRED'
    }
  );

  await dispatchEvent<inventoryAllocationEvent.expired.Event>(
    inventoryAllocationEvent.expired.eventConfig,
    inventoryAllocation
  );

  return;
});
