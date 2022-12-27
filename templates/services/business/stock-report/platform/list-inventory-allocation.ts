import { BY_CATEGORY_ID } from 'services/business/inventory-allocation/repository/gsi';
import { inventoryAllocationRepo } from 'services/business/inventory-allocation/repository/inventory-allocation-repository';

export const listInventoryAllocation = async (
  tenantId: string,
  categoryId: string,
  placeId: string,
  status: string
): Promise<number> => {
  const inventories = await inventoryAllocationRepo.listItem(
    '',
    { limit: 10 },
    {
      IndexName: BY_CATEGORY_ID,
      KeyConditionExpression: '#pk = :pk AND #categoryId = :categoryId',
      FilterExpression: '#status = :status AND #placeId = :placeId',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#categoryId': 'categoryId',
        '#status': 'status',
        '#placeId': 'placeId',
      },
      ExpressionAttributeValues: {
        ':pk': tenantId,
        ':categoryId': categoryId,
        ':status': status,
        ':placeId': placeId,
      },
      TableName: process.env.INVENTORY_ALLOCATION_TABLE,
    }
  );

  return inventories.items.length;
};
