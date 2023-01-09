import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export const rechargeBalance =
  (stripe: StripeRepo) =>
  async (amount: number, currency = 'usd'): Promise<Stripe.Topup> => {
    return await stripe.topups.create({
      amount,
      currency,
      description: 'Recharge for lack of balance to transfer',
      statement_descriptor: 'Recharge Stripe',
      metadata: {
        inApp: 'true',
      },
    });
  };
