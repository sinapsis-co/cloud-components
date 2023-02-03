import { StripeRepo } from 'services/support/stripe/platform';
import Stripe from 'stripe';

export const getBalance =
  (stripe: StripeRepo) =>
  async (currency = 'usd'): Promise<Stripe.Balance.Available> => {
    const balance = await stripe.balance.retrieve();

    return balance.available.find((item) => item.currency === currency) || { amount: 0, currency };
  };
