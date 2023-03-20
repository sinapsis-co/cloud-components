import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { InventoryAllocation } from '../entities/inventory-allocation';
import { BY_ORDER_ID_IDX_NAME } from '../repository/gsi';
import { inventoryAllocationRepo } from '../repository/inventory-allocation-repository';

export const getAllocationInventoryByOrder = async (
  orderId: string,
  tenantId: string
): Promise<InventoryAllocation> => {
  const inventories = await inventoryAllocationRepo.listItem(
    '',
    { limit: 1 },
    {
      IndexName: BY_ORDER_ID_IDX_NAME,
      KeyConditionExpression: '#pk = :pk AND #orderId = :orderId',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#orderId': 'orderId',
      },
      ExpressionAttributeValues: {
        ':pk': tenantId,
        ':orderId': orderId,
      },
    }
  );

  if (!inventories.items.length)
    throw new ApiError('ALLOCATION_INVENTORY.NOT_FOUND.BY_ORDER', 404, `orderId=${orderId}`);

  return inventories.items[0];
};
