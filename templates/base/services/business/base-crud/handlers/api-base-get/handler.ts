import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { HandledError } from '@sinapsis-co/cc-platform/util/handled-exception';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.get.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  throw new HandledError({ code: 'ERROR_ITEM_NOT_FOUND' });
  return await baseRepo.getItem({ tenantId, id: req.pathParams.id });
}, baseApi.get.config);
