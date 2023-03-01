import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryEvent } from 'services/business/inventory/catalog';
import { stockRepo } from '../../repository/stock';

export const handler = eventHandler<inventoryEvent.inventoryCreated.Event>(async (event) => {

    const inventory = event.detail;

    const isStock = await stockRepo.checkItemExists(
        { id: `${inventory.product!.category!.id}#${inventory.placeId}`, tenantId: inventory.tenantId });

    if (isStock.exists) {
        // update
        await stockRepo.updateItem({ id: `${inventory.product!.category!.id}#${inventory.placeId}`, tenantId: inventory.tenantId }, {
            amount: isStock.entity!.amount + 1,
        });
        return;
    } else {
        //create 
        await stockRepo.createItem({ id: `${inventory.product!.category!.id}#${inventory.placeId}`, tenantId: inventory.tenantId },
            { amount: 1, category: { id: inventory.product!.category!.id, name: inventory.product!.category!.name }, place: inventory.place! });
        return;
    }
});