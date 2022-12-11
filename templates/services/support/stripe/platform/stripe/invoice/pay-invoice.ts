import { Stripe, StripeRepo } from '..';
import { PaymentInvoiceParams } from '../invoice-stripe';

export const payInvoiceStripe = async (
  stripe: StripeRepo,
  payment: Omit<PaymentInvoiceParams, 'items'>
): Promise<{ pay: Stripe.Response<Stripe.Invoice>; charge: Stripe.Response<Stripe.Charge> }> => {
  let paymentMethodId = payment.paymentMethodId;
  if (payment.paymentMethodId) {
    const { data } = await stripe.customers.listPaymentMethods(payment.stripeId, { type: 'card' });
    if (!data.find((e) => e.id === payment.paymentMethodId)) {
      const { id } = await stripe.paymentMethods.attach(payment.paymentMethodId, {
        customer: payment.stripeId,
      });
      paymentMethodId = id;
    }
  }

  const invoiceId = payment.invoiceId;

  const pay = await stripe.invoices.pay(invoiceId!, { payment_method: paymentMethodId });
  const charge = await stripe.charges.retrieve(pay.charge as string);

  return {
    pay,
    charge,
  };
};
