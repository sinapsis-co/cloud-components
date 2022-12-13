import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import * as api from '../../catalog/api';
import { createOrder } from '../../lib';
import { orderRepo } from '../../repository';
import { generateId } from '../../utils/generate-id';

export const handler = apiHandler<api.createOrderIncome.Interface>(async (_, request) => {
  const { sub } = request.claims;

  const orderId = generateId();

  const orderPending = await createOrder.income.pending(
    {
      orderId,
      billingAddress: {},
      orderItem: [],
      orderQuantity: request.body.orderQuantity!,
    },
    request.claims
  );
  return orderRepo.createItem(
    { tenantId: sub, orderId },
    {
      ...orderPending,
      orderStatus: 'PENDING',
      orderDate: new Date().toISOString(),
      orderType: 'INCOME',
    }
  );
}, api.createOrderIncome.config);
