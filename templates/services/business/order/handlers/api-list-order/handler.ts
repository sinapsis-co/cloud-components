import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import * as api from '../../catalog/api';
import { orderRepo } from '../../repository';

export const handler = apiHandler<api.listOrder.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  const review = await orderRepo.listItem(tenantId, {
    limit: Number(limit || 50),
    nextToken,
  });

  return review;
}, api.listOrder.config);
