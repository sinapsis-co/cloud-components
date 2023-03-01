import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { errorApi } from 'services/support/utils/api-error';
import * as api from '../../catalog/api';
import { Order, OrderIncome } from '../../entities';
import { updateQuantityTemporalStrategy } from '../../platform/stripe-update-item-invoice';
import { orderRepo } from '../../repository';
import { ERROR_NOT_IS_PENDING_INCOME } from '../../utils/errors';

export const handler = apiHandler<api.updateItemOrderIncome.Interface>(async (_, request) => {
  const { tenantId, sub } = request.claims;
  const { orderId } = request.pathParams;
  const { orderItemNumber } = request.queryParams;
  const service = request.body;

  const order = (await orderRepo.getItem({
    tenantId,
    userId: sub,
    orderId,
  })) as Order & OrderIncome;

  if (order.orderType !== 'INCOME' || order.orderStatus !== 'PENDING' || !order.orderItem?.length) {
    throw errorApi(ERROR_NOT_IS_PENDING_INCOME);
  }

  const orderItem = await Promise.all(
    order.orderItem.map(async (data) => {
      if (data.orderItemNumber === orderItemNumber) {
        return { ...data, ...service };
      }
      return data;
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, ...data } = await updateQuantityTemporalStrategy({
    ...order,
    orderItem,
  });

  const dataOrder = await orderRepo.updateItem({ tenantId, orderId: orderId, userId: sub }, { ...data });
  return dataOrder as Order & OrderIncome;
}, api.updateItemOrderIncome.config);
