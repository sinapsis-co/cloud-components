import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { stockReportApi } from '../../catalog';
import { listInventoryAllocation } from '../../platform/list-inventory-allocation';
import { listStock } from '../../platform/list-stock';

export const handler = apiHandler<stockReportApi.list.Interface>(async (_, req) => {
  const { tenantId } = req.claims;

  const stocks = await listStock(tenantId);

  const response = await Promise.all(
    stocks.map(async (stock) => {
      const allocationInventory = await listInventoryAllocation(
        tenantId,
        stock.category.id,
        stock.place.id,
        'TO_BE_DELIVERED'
      );
      return {
        tenantId,
        category: stock.category,
        place: stock.place,
        amountAvailable: stock.amount,
        amountReserved: allocationInventory,
      };
    })
  );

  return {
    items: response,
    nextToken: null,
  };
}, stockReportApi.list.config);
