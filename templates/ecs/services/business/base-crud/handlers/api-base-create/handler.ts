import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';

export const handler = apiHandler<baseApi.create.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return await baseRepo.createItem({ tenantId, id: uuid() }, req.body);
}, baseApi.create.config);
