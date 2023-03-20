import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.delete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  return await baseRepo.deleteItem({ tenantId, id });
}, baseApi.delete.config);
