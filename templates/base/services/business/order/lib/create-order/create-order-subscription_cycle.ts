import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { orderIncomePending } from '../../catalog/event/income';
import { Order, OrderIncome } from '../../entities';
import { orderRepo } from '../../repository';
import { addMinutes } from '../../utils/add-days';
import { formatStripeToAmount } from '../../utils/format-stripe-to-amount';
import { generateId } from '../../utils/generate-id';

const ONE_WEEK = 10080;

export const createOrderCycle = async (invoice: Stripe.Invoice): Promise<Order> => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const { invoices } = getStripeClient({ secrets });

  const orderId = generateId();
  const orderIdOld = invoice.lines[0].metadata.orderId as string;
  const tenantId = invoice.lines[0].metadata.tenantId;
  const userId = invoice?.lines[0].metadata?.userId;

  const fullName = invoice['customer_name'] as string;

  const getInitialOrder = (await orderRepo.getItem({
    tenantId,
    userId,
    orderId: orderIdOld,
  })) as OrderIncome;

  const order = await orderRepo.createItem(
    { tenantId, orderId, userId },
    {
      orderType: 'INCOME',
      customer: {
        id: userId,
        givenName: fullName.split(' ')[0],
        familyName: fullName.split(' ')[1],
        email: invoice['customer_email'] as string,
      },

      customerId: '',
      orderItem: [
        {
          ...getInitialOrder.orderItem[0],
          orderItemSubTotal: formatStripeToAmount(invoice.subtotal),
          orderItemNumber: `${orderId}-1`,
        },
      ],
      orderStatus: 'PENDING',
      orderDate: new Date().toISOString(),
      orderTotal: formatStripeToAmount(invoice.total),
      orderSubTotal: formatStripeToAmount(invoice.subtotal),
      orderTax: formatStripeToAmount(invoice.tax || 0),
      priceCurrency: invoice.currency,
      expiredAt: addMinutes(new Date(), Number(ONE_WEEK)).getTime(),
      partOfInvoice: {
        invoiceId: invoice.id,
      },
      identifier: {
        subscriptionId: invoice.subscription as string,
      },
      paymentUrl: invoice.hosted_invoice_url || '',
      billingReason: invoice.billing_reason?.toUpperCase(),
    }
  );

  await invoices.update(invoice.id, {
    metadata: {
      ...invoice.metadata,
      ...invoice?.lines[0]?.metadata,
      orderId,
      tenantId,
      userId,
      orderItemNumber: `${orderId}-1`,
    },
  });

  await dispatchEvent<orderIncomePending.Event>(
    orderIncomePending.eventConfig,
    order as orderIncomePending.Event['payload']
  );

  return order;
};
