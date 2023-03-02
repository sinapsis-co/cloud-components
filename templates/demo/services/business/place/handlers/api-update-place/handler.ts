import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';

export const handler = apiHandler<placeApi.updatePlace.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const place = await placeRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!place.exists) throw new ApiError('PLACE_NOT_FOUND', 404);
    if (place.entity?.deleted) throw new ApiError('PLACE_DELETED', 400);

    return await placeRepo.updateItem(
        { id: req.pathParams.id, tenantId: tenant },
        {...req.body}
    );

}, placeApi.updatePlace.config);