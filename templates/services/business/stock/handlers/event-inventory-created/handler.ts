import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryEvent } from 'services/business/inventory/catalog';
import { stockRepo } from '../../repository/stock';

export const handler = eventHandler<inventoryEvent.inventoryCreated.Event>(async (event) => {

    const inventory = event.detail;

    const isStock = await stockRepo.checkItemExists(
        { id: `${inventory.product!.categoryId}#${inventory.placeId}`, tenantId: inventory.tenantId });

    if (isStock.exists) {
        // update
        console.log(isStock.entity);
        await stockRepo.updateItem({ id: `${inventory.product!.categoryId}#${inventory.placeId}`, tenantId: inventory.tenantId }, {
            amount: isStock.entity!.amount + 1,
        });
        return;
    } else {
        //create 
        await stockRepo.createItem({ id: `${inventory.product!.categoryId}#${inventory.placeId}`, tenantId: inventory.tenantId },
            { amount: 1, category: { id: inventory.product!.categoryId, name: '' }, place: inventory.place! });
        return;
    }
});