import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export interface ParamsUpdateStripeSubscription {
  subscriptionId: string;
  priceId: string;
  customerId: string;
  email: string;
  paymentMethodId?: string;
  coupon?: string;
}
export const updateStripeSubscription =
  (stripe: StripeRepo) =>
  async ({
    subscriptionId,
    priceId,
    customerId,
    paymentMethodId,
    coupon,
  }: ParamsUpdateStripeSubscription): Promise<Stripe.Subscription> => {
    const currentStripeSubscription = await stripe.subscriptions.retrieve(subscriptionId);
    const updatePayload: Stripe.SubscriptionUpdateParams = {};

    if (currentStripeSubscription.items.data[0].price.id !== priceId) {
      updatePayload.items = [
        {
          id: currentStripeSubscription.items.data[0].id,
          price: priceId,
        },
      ];
      updatePayload.cancel_at_period_end = false;
    }

    if (coupon) {
      updatePayload.coupon = coupon;
    }

    if (paymentMethodId) {
      updatePayload.default_payment_method = paymentMethodId;
      await stripe.attachStripePaymentMethod({ customerId, paymentMethodId });
    }

    if (Object.keys(updatePayload).length) {
      const stripeSubscription = await stripe.subscriptions.update(subscriptionId, updatePayload);

      return stripeSubscription;
    }

    return currentStripeSubscription;
  };
