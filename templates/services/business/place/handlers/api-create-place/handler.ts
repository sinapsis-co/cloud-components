import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';

export const handler = apiHandler<placeApi.createPlace.Interface>(async (_, req) => {

  return await placeRepo.createItem({ id: uuid() }, req.body);

}, placeApi.createPlace.config);