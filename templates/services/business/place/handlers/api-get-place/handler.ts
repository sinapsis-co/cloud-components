import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';

export const handler = apiHandler<placeApi.getPlace.Interface>(async (_, req) => {

    return await placeRepo.getItem({ id: req.pathParams.id });

}, placeApi.getPlace.config);