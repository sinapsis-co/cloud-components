import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { secretsStripe } from 'services/support/stripe/catalog';
import { InvoicePaid } from 'services/support/stripe/catalog/event/webhook';
import { getStripeClient } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { orderIncomePaid } from '../../catalog/event/income';
import { orderRepo } from '../../repository';
import { formatStripeToAmount } from '../../utils/format-stripe-to-amount';

export const handler = eventHandler<InvoicePaid.Event>(async (event) => {
  const invoice: Stripe.Invoice = event.detail.data.object as Stripe.Invoice;
  const metadata = invoice.lines?.data[0]?.metadata;

  if (!(metadata?.orderId && metadata?.tenantId && metadata?.userId)) {
    return;
  }

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const { charges } = getStripeClient({ secrets });

  const order = await orderRepo.getItem({
    orderId: metadata?.orderId,
    tenantId: metadata?.tenantId,
    userId: metadata?.userId,
  });

  const getCharge = await charges.retrieve(invoice.charge as string);
  const chargeCard = getCharge?.payment_method_details as Stripe.Charge.PaymentMethodDetails;

  const orderUpdate = await orderRepo.updateItem(
    {
      orderId: metadata.orderId,
      tenantId: metadata.tenantId,
      userId: metadata.userId,
    },
    {
      orderType: 'INCOME',
      orderStatus: 'SUCCESS',
      subscriptionId: invoice.subscription as string,
      orderSuccessAt: new Date().toISOString(),
      orderTotal: formatStripeToAmount(invoice.total),
      orderSubTotal: formatStripeToAmount(invoice.subtotal),
      orderTax: formatStripeToAmount(invoice.tax || 0),
      partOfInvoice: {
        invoiceId: invoice.id,
      },
      paymentUrl: invoice.hosted_invoice_url as string,
      paymentMethod: {
        gateway: 'STRIPE',
        paymentMethodDetails: {
          type: 'card',
          card: {
            brand: chargeCard.card?.brand as string,
            country: chargeCard.card?.country as string,
            last4: chargeCard.card?.last4 as string,
          },
        },
      },
      identifier: {
        ...order.identifier,
        invoiceId: invoice.id,
        subscriptionId: invoice.subscription,
      },
    }
  );
  await dispatchEvent<orderIncomePaid.Event>(
    orderIncomePaid.eventConfig,
    orderUpdate as orderIncomePaid.Event['payload']
  );
});
