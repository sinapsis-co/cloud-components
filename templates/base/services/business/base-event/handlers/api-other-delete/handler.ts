import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { otherApi } from '../../catalog';
import { otherRepo } from '../../repository/other';

export const handler = apiHandler<otherApi.delete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return await otherRepo.deleteItem({ tenantId, id });
}, otherApi.delete.config);
