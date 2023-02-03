import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export const transferToConnect =
  (stripe: StripeRepo) =>
  async (
    amount: number,
    stripeAccount: string,
    currency = 'usd',
    params?: Partial<Stripe.TransferCreateParams>
  ): Promise<Stripe.Transfer> => {
    return await stripe.transfers.create({
      amount,
      currency,
      destination: stripeAccount,
      ...params,
    });
  };
