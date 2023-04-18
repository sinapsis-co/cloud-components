import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.create.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  return baseRepo.createItem({ tenantId, id: uuid() }, req.body, { emitEvent: true });
}, baseApi.create.config);
