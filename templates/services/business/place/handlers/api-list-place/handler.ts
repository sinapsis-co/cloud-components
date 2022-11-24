import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { placeApi } from '../../catalog';
import { placeRepo } from '../../repository/place';

export const handler = apiHandler<placeApi.listPlace.Interface>(async (_, req) => {

    const tenant = req.claims.tenantId || '1234';

    return await placeRepo.listItem(tenant, { limit: 100 });

}, placeApi.listPlace.config);