import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
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
  }
});
