import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { inventoryEvent } from 'services/business/inventory/catalog';
import { stockRepo } from '../../repository/stock';

export const handler = eventHandler<inventoryEvent.inventoryUpdated.Event>(async (event) => {

        const inventory = event.detail;

        if (inventory.status === 'NOT_AVAILABLE' || inventory.status === 'EXPIRED') {
                await stockRepo.updateItem(
                        { id: `${inventory.product!.category!.id}#${inventory.placeId}`, tenantId: inventory.tenantId },
                        {},
                        {
                                UpdateExpression: 'SET amount = amount - :o, #updatedAt = :ua',
                                ExpressionAttributeNames: {
                                        '#updatedAt': 'updatedAt'
                                },
                                ExpressionAttributeValues: {
                                        ':o': 1,
                                        ':ua': new Date().toISOString()
                                }
                        }
                );
        }

        if (inventory.status === 'AVAILABLE') {
                await stockRepo.updateItem(
                        { id: `${inventory.product!.category!.id}#${inventory.placeId}`, tenantId: inventory.tenantId },
                        {},
                        {
                                UpdateExpression: 'SET amount = amount + :o, #updatedAt = :ua',
                                ExpressionAttributeNames: {
                                        '#updatedAt': 'updatedAt'
                                },
                                ExpressionAttributeValues: {
                                        ':o': 1,
                                        ':ua': new Date().toISOString()
                                }
                        }
                );
        }

        return;
});