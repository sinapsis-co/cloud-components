import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { Order, OrderStatus } from 'services/business/order/entities';
import { Payment } from 'services/business/payment/entities';
import { Transaction, TransactionStatus } from '../../entities';
import { transactionRepo } from '../../repository';

export const handler = async ({ payment, order }: { payment?: Payment; order: Order }): Promise<Transaction> => {
  const status = payment?.status || order.orderStatus;
  const transactions = await transactionRepo.createItem(
    {
      tenantId: order.tenantId,
      id: uuid(),
      userId: order.userId,
    },
    {
      order: {
        ...order,
        orderStatus: status as OrderStatus,
      },
      orderId: order?.orderId,
      status: status as TransactionStatus,
      payment: payment,
      paymentId: payment?.paymentIntentId,
    }
  );

  return transactions;
};
