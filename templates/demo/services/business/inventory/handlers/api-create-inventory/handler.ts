import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { inventoryApi, inventoryEvent } from '../../catalog';
import { getPlace } from '../../platform/place';
import { getProduct } from '../../platform/product';
import { inventoryRepo } from '../../repository/inventory';

export const handler = apiHandler<inventoryApi.createInventory.Interface>(async (_, req) => {

  const tenant = req.claims.tenantId;

  const placeBody = await getPlace(req.body.placeId, tenant);
  const productBody = await getProduct(req.body.productId, tenant);

  const result = await inventoryRepo.createItem({ id: uuid(), tenantId: tenant },
    {
      ...req.body,
      place: { id: placeBody.id, name: placeBody.name },
      product: {
        id: productBody.id,
        name: productBody.name,
        category: { id: productBody.category!.id, name: productBody.category!.name }
      },
      categoryId: productBody.category!.id,
      status: 'AVAILABLE'
    });

  await dispatchEvent<inventoryEvent.inventoryCreated.Event>(inventoryEvent.inventoryCreated.eventConfig, {
    ...result
  });

  return result;

}, inventoryApi.createInventory.config);