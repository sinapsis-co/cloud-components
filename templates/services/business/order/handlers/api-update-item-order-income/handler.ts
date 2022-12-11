import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { Order, OrderIncome } from 'services/order/entities';
import { updateQuantityTemporalStrategy } from 'services/order/platform/stripe-update-item-invoice';
import { orderRepo } from 'services/order/repository';
import { ERROR_INVALID_FREQUENCY_SERVICE, ERROR_NOT_IS_PENDING_INCOME } from 'services/order/utils/errors';
import { userSkillRepository } from 'services/user-skill/repository/user-skill-repository';
import { formatAmount } from 'support-service/stripe/utils/format-amount';
import { errorApi } from 'support-service/utils/api-error';
import * as api from '../../catalog/api';

export const handler = apiHandler<api.updateItemOrderIncome.Interface>(async (_, request) => {
  const { sub } = request.claims;
  const { orderId } = request.pathParams;
  const { orderItemNumber } = request.queryParams;
  const service = request.body;

  const order = (await orderRepo.getItem({
    tenantId: sub,
    orderId,
  })) as Order & OrderIncome;

  if (order.orderType !== 'INCOME' || order.orderStatus !== 'PENDING' || !order.orderItem?.length) {
    throw errorApi(ERROR_NOT_IS_PENDING_INCOME);
  }

  const orderItem = await Promise.all(
    order.orderItem.map(async (data) => {
      if (data.orderItemNumber === orderItemNumber) {
        const getSkill = await userSkillRepository.getItem({
          userId: data?.identifier?.skillerId as string,
          userSkillId: data?.identifier?.skillId as string,
        });

        const price = getSkill.prices.find((price) => price.description === service.orderFrequency);

        if (!price) {
          throw errorApi(ERROR_INVALID_FREQUENCY_SERVICE);
        }

        return { ...data, ...service, orderItemSubTotal: formatAmount(price.amount) };
      }
      return data;
    })
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, ...data } = await updateQuantityTemporalStrategy({
    ...order,
    orderItem,
  });

  const dataOrder = await orderRepo.updateItem({ tenantId: sub, orderId: orderId }, { ...data });
  return dataOrder as Order & OrderIncome;
}, api.updateItemOrderIncome.config);
