import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { placeApi } from '../../catalog';

export const handler = apiHandler<placeApi.createPlace.Interface>(async (_, req) => {
  return {
    message: 'place created',
  };
}, placeApi.createPlace.config);
