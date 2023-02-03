import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { Stock } from 'services/business/stock/entities';
import { stockRepo } from 'services/business/stock/repository/stock';

export const listStock = async (tenantId: string): Promise<Stock[]> => {
  const stocks = await stockRepo.listItem(
    tenantId,
    { limit: 10 },
    {
      TableName: process.env.STOCK_TABLE,
    }
  );

  if (!stocks.items.length) throw new ApiError('STOCK.NOT_FOUND', 404);

  return stocks.items;
};
