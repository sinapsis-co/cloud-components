import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { stockApi } from '../../catalog';
import { getStockByCategory } from '../../platform/stock-by-category';
import { stockRepo } from '../../repository/stock';

export const handler = apiHandler<stockApi.listStock.Interface>(async (_, req) => {
  const tenant = req.claims.tenantId;

  if (req.queryParams.category) {
    return await getStockByCategory(tenant, req.queryParams.category, req.queryParams.place);
  }

  return await stockRepo.listItem(tenant, { limit: 100 });
}, stockApi.listStock.config);
