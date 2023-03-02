import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { Inventory } from 'services/business/inventory/entities';
import { BY_CATEGORY_ID_IDX_NAME } from 'services/business/inventory/repository/gsi';
import { inventoryRepo } from 'services/business/inventory/repository/inventory';

export const getFirstInventoryByCategoryId = async (categoryId: string, tenantId: string): Promise<Inventory> => {
  const inventories = await inventoryRepo.listItem(
    '',
    { limit: 10 },
    {
      IndexName: BY_CATEGORY_ID_IDX_NAME,
      KeyConditionExpression: '#pk = :pk AND #categoryId = :categoryId',
      FilterExpression: '#status = :status',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#categoryId': 'categoryId',
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':pk': tenantId,
        ':categoryId': categoryId,
        ':status': 'AVAILABLE',
      },
      TableName: process.env.INVENTORY_TABLE,
    }
  );
  if (!inventories.items.length)
    throw new ApiError('INVENTORIES.NOT_FOUND.BY_CATEGORY', 404, `categoryId=${categoryId}`);

  return inventories.items[0];
};
