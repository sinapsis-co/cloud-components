import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export const cancelStripeSubscription =
  (stripe: StripeRepo) =>
  async (subscriptionId: string, cancelAtPeriodEnd = true): Promise<Stripe.Subscription> => {
    const stripeSubscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: cancelAtPeriodEnd,
    });

    return stripeSubscription;
  };
