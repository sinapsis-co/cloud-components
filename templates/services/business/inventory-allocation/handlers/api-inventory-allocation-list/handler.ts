import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryAllocationApi } from '../../catalog';
import { getAllocationInventoryByOrder } from '../../platform/allocation-inventory-by-order';
import { inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export const handler = apiHandler<inventoryAllocationApi.list.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;

  if (req.queryParams.order) {
    const result = await getAllocationInventoryByOrder(req.queryParams.order, tenantId);
    return { items: [result], nextToken: null };
  }

  return await inventoryAllocationRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
}, inventoryAllocationApi.list.config);
