import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryEvent } from 'services/business/inventory/catalog';
import { stockRepo } from '../../repository/stock';

export const handler = eventHandler<inventoryEvent.inventoryCreated.Event>(async (event) => {

    //TODO: search product and validate if category exist (try to receive in body of event)
    // If not exist, create new items
    // If exist, update and increase amount

    await stockRepo.createItem({ id: event.detail.product, tenantId: event.detail.tenantId }, { amount: 0, category: '', place: ''});
    return;
});