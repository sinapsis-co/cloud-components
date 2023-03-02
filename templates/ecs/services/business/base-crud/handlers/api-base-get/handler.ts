import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.get.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await baseRepo.getItem({ tenantId, id: req.pathParams.id });
}, baseApi.get.config);
