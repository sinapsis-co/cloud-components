import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { otherApi } from '../../catalog';
import { otherRepo } from '../../repository/other';

export const handler = apiHandler<otherApi.get.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await otherRepo.getItem({ tenantId, id: req.pathParams.id });
}, otherApi.get.config);
