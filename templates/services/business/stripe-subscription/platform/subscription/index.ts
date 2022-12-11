import { getStripeClient, Stripe, StripeConfig, StripeRepo } from 'services/support/stripe/platform';

import { cancelStripeSubscription } from './cancel-stripe-subscription';
import { createStripeSubscription, ParamsCreateStripeSubscription } from './create-stripe-subscription';
import { ParamsUpdateQuantityStripeSubscription, updateQuantity } from './update-quantity';
import { ParamsUpdateStripeSubscription, updateStripeSubscription } from './update-stripe-subscription';

export interface StripeSubscription {
  create: (params: ParamsCreateStripeSubscription) => Promise<Stripe.Subscription>;
  cancel: (subscriptionId: string, cancelAtPeriodEnd?: boolean) => Promise<Stripe.Subscription>;
  update: (params: ParamsUpdateStripeSubscription) => Promise<Stripe.Subscription>;
  updateQuantity: (params: ParamsUpdateQuantityStripeSubscription) => Promise<Stripe.Subscription>;
}

const stripeSubscription = (config: StripeConfig): StripeSubscription & StripeRepo => {
  const stripe = getStripeClient(config);

  return {
    ...stripe,
    cancel: cancelStripeSubscription(stripe),
    create: createStripeSubscription(stripe),
    update: updateStripeSubscription(stripe),
    updateQuantity: updateQuantity(stripe),
  };
};

export default stripeSubscription;
