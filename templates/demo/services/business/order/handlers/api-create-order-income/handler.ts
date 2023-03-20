import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import * as api from '../../catalog/api';
import { orderIncomePending } from '../../catalog/event/income';
import { createOrder } from '../../lib';
import { getOrderByCustomer } from '../../platform/order-by-customer';
import { orderRepo } from '../../repository';
import { generateId } from '../../utils/generate-id';

export const handler = apiHandler<api.createOrderIncome.Interface>(async (_, request) => {
  const { tenantId, sub } = request.claims;

  const isOrderPending = await getOrderByCustomer(sub, 'PENDING');

  if (isOrderPending.exist) throw new ApiError('ORDER.EXIST_ORDER_PENDING', 400, `customerId: ${sub}`);

  const orderId = generateId();

  const orderPending = await createOrder.income.pending(
    {
      orderId,
      orderItem: request.body.orderItem,
      isSubscription: request.body.isSubscription,
    },
    request.claims
  );
  const order = await orderRepo.createItem(
    { tenantId, orderId, userId: sub },
    {
      ...orderPending,
      orderStatus: 'PENDING',
      orderDate: new Date().toISOString(),
      orderType: 'INCOME',
    }
  );
  await dispatchEvent<orderIncomePending.Event>(
    orderIncomePending.eventConfig,
    order as orderIncomePending.Event['payload']
  );
  return order;
}, api.createOrderIncome.config);
