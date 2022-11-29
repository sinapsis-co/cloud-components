import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryApi } from '../../catalog';
import { getPlace } from '../../platform/place';
import { inventoryRepo } from '../../repository/inventory';

export const handler = apiHandler<inventoryApi.updateInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    if (req.body.placeId) await getPlace(req.pathParams.id, tenant);

    return await inventoryRepo.updateItem({ id: req.pathParams.id, tenantId: tenant }, { ...req.body });

}, inventoryApi.updateInventory.config);