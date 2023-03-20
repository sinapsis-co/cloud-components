import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';

export const handler = apiHandler<placeApi.getPlace.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId;

    return await placeRepo.getItem({ id: req.pathParams.id, tenantId: tenant });

}, placeApi.getPlace.config);