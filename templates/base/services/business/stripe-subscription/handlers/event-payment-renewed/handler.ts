import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { orderRepo } from 'services/business/order/repository';
import { transactionCreate } from 'services/business/transaction/catalog/event';
import { TransactionStatus } from 'services/business/transaction/entities';
import { InvoicePaid } from 'services/support/stripe/catalog/event/webhook';
import Stripe from 'stripe';
import { InvoicePaid as CustomerInvoicePaid } from '../../catalog/event';

export const handler = eventHandler<InvoicePaid.Event>(async (event) => {
  const invoice = event.detail.data.object as Stripe.Invoice;
  const metadata = invoice.lines?.data[0]?.metadata;

  switch (invoice.billing_reason) {
    case 'subscription_create':
    case 'subscription_cycle':
      {
        await dispatchEvent<CustomerInvoicePaid.Event>(CustomerInvoicePaid.eventConfig, {
          tenantId: metadata?.tenantId,
          orderId: metadata?.orderId,
          userId: metadata?.userId,
          subscriptionId: invoice.subscription as string,
        });

        const order = await orderRepo.getItem({
          tenantId: metadata?.tenantId,
          orderId: metadata?.orderId,
          userId: metadata?.userId,
        });
        await dispatchEvent<transactionCreate.Event>(transactionCreate.eventConfig, {
          payload: JSON.stringify(invoice),
          order: order,
          orderId: order.orderId,
          status: order.orderStatus as TransactionStatus,
          userId: order.userId,
        });
      }
      break;
  }
});
