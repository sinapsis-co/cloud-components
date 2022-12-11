import StripeClient from 'stripe';

export interface ParamsAttachPaymentMethod {
  customerId: string;
  paymentMethodId: string;
}
export const attachStripePaymentMethod =
  (stripe: StripeClient) =>
  async ({ paymentMethodId, customerId }: ParamsAttachPaymentMethod): Promise<void> => {
    await stripe.paymentMethods.attach(paymentMethodId, { customer: customerId });
    await stripe.customers.update(customerId, { invoice_settings: { default_payment_method: paymentMethodId } });
  };
