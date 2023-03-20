import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { orderRepo } from 'services/business/order/repository';
import { transactionCreate } from 'services/business/transaction/catalog/event';
import { secretsStripe } from 'services/support/stripe/catalog';
import { InvoicePaymentRequired, PaymentFailed } from 'services/support/stripe/catalog/event/webhook';
import { getStripeClient } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { PaymentFailed as CustomerPaymentFailed } from '../../catalog/event';
import { subscriptionRepository } from '../../repository';

export const handler = eventHandler<PaymentFailed.Event | InvoicePaymentRequired.Event>(async (event) => {
  const invoice = event.detail.data.object as Stripe.Invoice;
  const metadata = invoice.lines?.data[0]?.metadata;

  if (!metadata.tenantId) return;
  switch (invoice.billing_reason) {
    case 'subscription_update':
    case 'subscription_create':
    case 'subscription_cycle':
      {
        const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
        const { charges } = getStripeClient({ secrets });
        const charge = await charges.retrieve(invoice.charge as string);

        const sub = await subscriptionRepository.updateItem(
          {
            tenantId: metadata?.tenantId,
            subscriptionId: invoice.subscription as string,
            userId: metadata?.userId,
          },
          {
            warningMessage: invoice.next_payment_attempt
              ? `Payment failed, next attempt on ${new Date(invoice.next_payment_attempt * 1000).toLocaleDateString()}`
              : 'Payment failed, subscription will be canceled',
          }
        );
        await dispatchEvent<CustomerPaymentFailed.Event>(CustomerPaymentFailed.eventConfig, {
          tenantId: sub.tenantId,
          orderId: sub?.orderId,
          userId: sub?.userId,
          subscriptionId: invoice.subscription as string,
          reason: charge.failure_code || 'Payment failed',
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
          userId: order.userId,
        });
      }
      break;
  }
});
