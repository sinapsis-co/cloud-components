import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryApi } from '../../catalog';
import { inventoryRepo } from '../../repository/inventory';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { getPlace } from '../../platform/place';
import { getProduct } from '../../platform/product';

export const handler = apiHandler<inventoryApi.createInventory.Interface>(async (_, req) => {

  const tenant = req.claims.tenantId || '1234';

  await getPlace(req.body.place, tenant);
  await getProduct(req.body.product, tenant);

  const result = await inventoryRepo.createItem({ id: uuid(), tenantId: tenant },
    {
      ...req.body,
      status: 'AVAILABLE'
    });

  //TODO: emit event to stock

  return result;

}, inventoryApi.createInventory.config);