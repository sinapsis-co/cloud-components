import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export interface ParamsUpdateQuantityStripeSubscription {
  subscriptionId: string;
  newQuantity: number;
}
export const updateQuantity =
  (stripe: StripeRepo) =>
  async ({ subscriptionId, newQuantity }: ParamsUpdateQuantityStripeSubscription): Promise<Stripe.Subscription> => {
    const currentStripeSubscription = await stripe.subscriptions.retrieve(subscriptionId);
    const updatePayload: Stripe.SubscriptionUpdateParams = {
      items: [
        {
          id: currentStripeSubscription.items.data[0].id,
          quantity: newQuantity,
        },
      ],
    };

    const stripeSubscription = await stripe.subscriptions.update(subscriptionId, updatePayload);

    return stripeSubscription;
  };
