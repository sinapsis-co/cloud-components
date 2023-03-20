import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import * as api from '../../catalog/api';
import { orderRepo } from '../../repository';

export const handler = apiHandler<api.getOrder.Interface>(async (_, request) => {
  const { tenantId, sub } = request.claims;
  const { orderId } = request.pathParams;

  return orderRepo.getItem({ tenantId, orderId, userId: sub }).catch(() => {
    throw new ApiError('ORDER_NOT_FOUND', 404, `Order ${orderId} not found`);
  });
}, api.getOrder.config);
