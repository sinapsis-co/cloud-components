import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { otherApi } from '../../catalog';
import { otherRepo } from '../../repository/other';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';

export const handler = apiHandler<otherApi.create.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await otherRepo.createItem({ tenantId, id: uuid() }, req.body);
}, otherApi.create.config);
