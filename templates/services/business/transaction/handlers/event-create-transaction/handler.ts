import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { OrderStatus } from 'services/business/order/entities';
import { transactionCreate } from '../../catalog/event';
import { TransactionStatus } from '../../entities';
import { transactionRepo } from '../../repository';

export const handler = eventHandler<transactionCreate.Event>(async (event) => {
  const { payment, order, payload } = event.detail;
  const status = payment?.status || order.orderStatus;
  await transactionRepo.createItem(
    {
      tenantId: order.tenantId,
      id: uuid(),
      orderId: order.orderId,
    },
    {
      order: {
        ...order,
        orderStatus: status as OrderStatus,
      },
      userId: order.userId,
      orderId: order?.orderId,
      status: status as TransactionStatus,
      payment: payment,
      paymentId: payment?.paymentIntentId,
      payload: payload,
    }
  );
});
