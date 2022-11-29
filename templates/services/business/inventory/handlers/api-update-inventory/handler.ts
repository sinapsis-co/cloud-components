import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { inventoryApi, inventoryEvent } from '../../catalog';
import { getPlace } from '../../platform/place';
import { inventoryRepo } from '../../repository/inventory';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';

export const handler = apiHandler<inventoryApi.updateInventory.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    if (req.body.placeId) await getPlace(req.pathParams.id, tenant);

    const result = await inventoryRepo.updateItem({ id: req.pathParams.id, tenantId: tenant }, { ...req.body });

    if (result.status === 'NOT_AVAILABLE')
        await dispatchEvent<inventoryEvent.inventoryUpdated.Event>(inventoryEvent.inventoryUpdated.eventConfig, {
            ...result
        });

    return result;

}, inventoryApi.updateInventory.config);