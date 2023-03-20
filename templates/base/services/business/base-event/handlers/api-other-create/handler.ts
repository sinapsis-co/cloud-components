import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { otherApi } from '../../catalog';
import { otherRepo } from '../../repository/other';

export const handler = apiHandler<otherApi.create.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await otherRepo.createItem({ tenantId, id: uuid() }, req.body);
}, otherApi.create.config);
