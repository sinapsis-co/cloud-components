import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { orderIncomeRegister } from 'services/business/order/catalog/event/income';
import { formatStripeToAmount } from 'services/business/order/utils/format-stripe-to-amount';
import { generateId } from 'services/business/order/utils/generate-id';
import { Paid, PaymentFailed } from 'services/support/stripe/catalog/event/webhook';
import Stripe from 'stripe';
import { getCustomerByExternal } from '../../platform/get-customer-by-external';
import { invoiceRepository } from '../../repository';

export const handler = eventHandler<PaymentFailed.Event | Paid.Event>(async (event) => {
  const payload: Stripe.Invoice = event.detail.data.object as Stripe.Invoice;

  const customer = await getCustomerByExternal(payload.customer as string);

  const description: string =
    payload.lines.data.map((l: any) => l.description).join(', ') || payload.billing_reason || '';

  if (payload.status === 'paid') {
    await invoiceRepository.createItem(
      {
        id: payload.id!,
        invoiceDate: new Date(payload.created * 1000),
        customerId: customer.tenantId,
      },
      {
        stripeId: payload.id!,
        status: payload.total < 0 ? 'refund' : payload.status,
        description: payload?.metadata?.orderId ? `Order ${payload?.metadata?.orderId}` : description,
        url: payload.hosted_invoice_url || payload.invoice_pdf || '',
        amount: (payload.total < 0 ? payload.total : payload.amount_paid) / 100,
        orderId: payload?.metadata?.orderId || generateId(),
        subscriptionId: payload.subscription as string,
      }
    );

    await dispatchEvent(orderIncomeRegister.eventConfig, {
      orderType: 'INCOME',
      orderDate: new Date().toISOString(),
      orderStatus: 'SUCCESS',
      orderTotal: formatStripeToAmount(payload.total),
      orderSubTotal: formatStripeToAmount(payload.subtotal),
      orderTax: formatStripeToAmount(payload.tax || 0),
      customerId: customer.tenantId,
      priceCurrency: payload.currency.toUpperCase(),
      subscriptionId: payload.subscription as string,
      customer: {
        id: customer.tenantId,
        email: customer.email,
        givenName: payload.customer_name?.split(' ')[0] || '',
        familyName: payload.customer_name?.split(' ')[1] || '',
      },
      orderItem: [
        {
          orderItemNumber: payload.lines[0].metadata.orderItemNumber!,
          orderItemCategory: payload.lines.data[0].metadata.orderItemCategory,
          description: description,
          name: payload.lines.data[0].description!,
          orderItemSubTotal: formatStripeToAmount(payload.lines.data[0].amount || 0),
          orderQuantity: payload.lines.data[0].quantity || 1,
          metadata: payload.metadata || {},
          identifier: {
            partOfInvoice: {
              invoiceId: payload.id!,
            },
          },
        },
      ],
      tenantId: customer.tenantId,
      orderId: payload?.metadata?.orderId || generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
});
