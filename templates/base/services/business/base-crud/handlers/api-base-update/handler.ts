import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.update.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return await baseRepo.updateItem({ tenantId, id }, req.body);
}, baseApi.update.config);
