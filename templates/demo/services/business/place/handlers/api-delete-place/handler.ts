import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';

export const handler = apiHandler<placeApi.deletePlace.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    const place = await placeRepo.checkItemExists({ id: req.pathParams.id, tenantId: tenant });

    if (!place.exists) throw new ApiError('PLACE_NOT_FOUND', 404);
    if (place.entity?.deleted) throw new ApiError('PLACE_DELETED', 400);

    return await placeRepo.logicalDeleteItem({ id: req.pathParams.id, tenantId: tenant });

}, placeApi.deletePlace.config);