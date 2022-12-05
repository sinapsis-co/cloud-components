import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { BY_CATEGORY_ID_IDX_NAME } from 'services/business/inventory';
import { Inventory } from 'services/business/inventory/entities';
import { inventoryRepo } from 'services/business/inventory/repository/inventory';

export const getFirstInventoryByCategoryId = async (categoryId: string, tenantId: string): Promise<Inventory> => {
  const inventories = await inventoryRepo.listItem(
    '',
    { limit: 1 },
    {
      IndexName: BY_CATEGORY_ID_IDX_NAME,
      KeyConditionExpression: '#pk = :pk AND #categoryId = :categoryId',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#categoryId': 'categoryId',
      },
      ExpressionAttributeValues: {
        ':pk': tenantId,
        ':categoryId': categoryId,
      },
      TableName: process.env.INVENTORY_TABLE,
    }
  );

  if (!inventories.items.length)
    throw new ApiError('INVENTORIES.NOT_FOUND.BY_CATEGORY', 404, `categoryId=${categoryId}`);

  return inventories.items[0];
};
