import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { CustomFault } from '../../../../../config/error-catalog';
import { baseApi } from '../../catalog';
import { baseRepo } from '../../repository/base';

export const handler = apiHandler<baseApi.list.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  throw new CustomFault({ code: 'FAULT_DYN_BATCH_CREATE_ITEM' });
  return await baseRepo.listItem(tenantId, { limit: Number(limit) || 50, nextToken });
}, baseApi.list.config);
