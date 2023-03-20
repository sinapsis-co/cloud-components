import { PaginatedResponse } from '@sinapsis-co/cc-platform/catalog/api';
import { Stock } from '../entities';
import { stockRepo } from '../repository/stock';

export const getStockByCategory = async (
  tenantId: string,
  categoryId: string,
  placeId?: string
): Promise<PaginatedResponse<Stock>> => {
  return await stockRepo.listItem(
    tenantId,
    { limit: 100 },
    {
      KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#sk': 'sk',
      },
      ExpressionAttributeValues: {
        ':pk': tenantId,
        ':sk': `${categoryId}#${placeId || ''}`,
      },
    }
  );
};
