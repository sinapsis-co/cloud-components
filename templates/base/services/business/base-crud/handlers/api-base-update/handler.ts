import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { wait } from '@sinapsis-co/cc-platform/util/executers';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.update.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  await wait(20000);
  return await baseRepo.updateItem({ tenantId, id }, req.body);
}, baseApi.update.config);
