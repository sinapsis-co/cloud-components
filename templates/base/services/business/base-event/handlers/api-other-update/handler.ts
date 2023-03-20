import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { otherApi } from '../../catalog';
import { otherRepo } from '../../repository/other';

export const handler = apiHandler<otherApi.update.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return await otherRepo.updateItem({ tenantId, id }, req.body);
}, otherApi.update.config);
