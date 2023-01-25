import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { orderIncomePaid, orderIncomeRegister } from '../../catalog/event/income';
import { orderRepo } from '../../repository';
import { generateId } from '../../utils/generate-id';

export const handler = eventHandler<orderIncomeRegister.Event>(async (event) => {
  const { tenantId, orderId, userId, ...body } = event.detail;
  const checkOrder = await orderRepo.getItem({ tenantId, orderId, userId }).catch(() => undefined);
  let order = checkOrder;
  if (!checkOrder || checkOrder.orderStatus === 'SUCCESS') {
    order = await orderRepo.createItem(
      { tenantId, orderId: generateId(), userId },
      {
        ...(checkOrder || {}),
        ...body,
      }
    );
  }
  order = await orderRepo.createItem(
    { tenantId, orderId, userId },
    {
      ...checkOrder,
      ...body,
    }
  );

  await dispatchEvent<orderIncomePaid.Event>(orderIncomePaid.eventConfig, order as orderIncomePaid.Event['payload']);
});
