import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { InvoiceCreated } from 'services/support/stripe/catalog/event/webhook';
import Stripe from 'stripe';
import { createOrderCycle } from '../../lib/create-order/create-order-subscription_cycle';

export const handler = eventHandler<InvoiceCreated.Event>(async (event) => {
  const invoice = event.detail.data.object[0] as Stripe.Invoice;

  if (invoice.billing_reason === 'subscription_cycle') {
    await createOrderCycle(invoice);
    return;
  }
});
