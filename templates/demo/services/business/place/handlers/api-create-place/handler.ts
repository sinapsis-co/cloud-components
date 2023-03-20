import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';

export const handler = apiHandler<placeApi.createPlace.Interface>(async (_, req) => {

  const tenant = req.claims.tenantId;

  return await placeRepo.createItem({ id: uuid(), tenantId: tenant }, req.body);

}, placeApi.createPlace.config);