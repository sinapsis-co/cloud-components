import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/repo-base';

export const handler = apiHandler<baseApi.update.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return await baseRepo.updateItem({ tenantId, id }, req.body);
}, baseApi.update.config);
