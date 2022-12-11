import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import * as api from '../../catalog/api';
import { orderRepo } from '../../repository';

export const handler = apiHandler<api.getOrder.Interface>(async (_, request) => {
  const { tenantId } = request.claims;
  const { orderId } = request.pathParams;

  return orderRepo.getItem({ tenantId, orderId });
}, api.getOrder.config);
