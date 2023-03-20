import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { getCustomerByExternal } from 'services/business/customer-gateway/platform';
import { InvoicePaid } from 'services/support/stripe/catalog/event/webhook';
import Stripe from 'stripe';
import { invoiceRepository } from '../../repository/invoice';

export const handler = eventHandler<InvoicePaid.Event>(async (event) => {
  const payload: Stripe.Invoice = event.detail.data.object as Stripe.Invoice;

  const customer = await getCustomerByExternal(payload.customer as string);

  const description: string =
    payload.lines.data.map((l: any) => l.description).join(', ') || payload.billing_reason || '';

  if (payload.status === 'paid') {
    const invoice = await invoiceRepository.checkItemExists({
      id: payload.id!,
      tenantId: customer.tenantId,
      userId: customer.userId,
    });

    if (invoice.exists) {
      invoiceRepository.updateItem(
        {
          id: payload.id!,
          tenantId: customer.tenantId,
          userId: customer.userId,
        },
        {
          status: payload.status,
        }
      );
      return;
    }

    await invoiceRepository.createItem(
      {
        id: payload.id!,
        tenantId: customer.tenantId,
        userId: customer.userId,
      },
      {
        invoiceDate: new Date(payload.created * 1000).toISOString(),
        stripeId: payload.customer as string,
        status: payload.total < 0 ? 'refund' : payload.status,
        description: payload.lines.data[0].metadata
          ? `Order ${payload?.lines?.data?.[0].metadata.orderId}`
          : description,
        url: payload.hosted_invoice_url || payload.invoice_pdf || '',
        amount: (payload.total < 0 ? payload.total : payload.amount_paid) / 100,
        orderId: payload?.lines?.data?.[0].metadata.orderId,
        subscriptionId: payload.subscription as string,
      }
    );
  }
});
