import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import * as api from '../../catalog/api';
import { orderIncomeExpired } from '../../catalog/event/income';
import { createOrder } from '../../lib';
import { orderRepo } from '../../repository';
import { generateId } from '../../utils/generate-id';

export const handler = apiHandler<api.createOrderIncome.Interface>(async (_, request) => {
  const { tenantId } = request.claims;

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
    { tenantId, orderId },
    {
      ...orderPending,
      orderStatus: 'PENDING',
      orderDate: new Date().toISOString(),
      orderType: 'INCOME',
    }
  );
  await dispatchEvent<orderIncomeExpired.Event>(
    orderIncomeExpired.eventConfig,
    order as orderIncomeExpired.Event['payload']
  );
  return order;
}, api.createOrderIncome.config);
