import { InventoryAllocation } from '../entities/inventory-allocation';
import { BY_SUBSCRIPTION_ID } from '../repository/gsi';
import { inventoryAllocationRepo } from '../repository/inventory-allocation-repository';

export const getAllocationInventoryBySubscription = async (
  subscriptionId: string,
  tenantId: string
): Promise<{ entity?: InventoryAllocation; exist: boolean }> => {
  const inventories = await inventoryAllocationRepo.listItem(
    '',
    { limit: 1 },
    {
      IndexName: BY_SUBSCRIPTION_ID,
      KeyConditionExpression: '#pk = :pk AND #subscriptionId = :subscriptionId',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#subscriptionId': 'subscriptionId',
      },
      ExpressionAttributeValues: {
        ':pk': tenantId,
        ':subscriptionId': subscriptionId,
      },
    }
  );

  if (inventories.items.length) return { exist: true, entity: inventories.items[0] };

  return { entity: undefined, exist: false };
};
