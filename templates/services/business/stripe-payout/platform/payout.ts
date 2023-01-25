import { Stripe, StripeRepo } from 'services/support/stripe/platform';
import { StripePayout } from '../entities';

export const payout =
  (stripe: StripeRepo) =>
  async (data: StripePayout): Promise<Stripe.Payout> => {
    const { detailStripeTransfer } = data;
    const transfer = await stripe.transfers.retrieve(detailStripeTransfer?.id as string);

    const stripeAccount = data.detailPayout.target?.id as string;

    const balance = await stripe.balanceTransactions.list(
      { source: transfer.destination_payment as string },
      { stripeAccount }
    );
    const itemBalance = balance.data[0];
    const payout = await stripe.payouts.create(
      {
        amount: itemBalance.amount,
        currency: itemBalance.currency,
        statement_descriptor: 'Payment App',
        destination:
          data.detailPayout.target?.details?.[data.detailPayout.target.type as 'stripeBank' | 'stripeCard']
            ?.provideTargetId,
        metadata: {
          transferId: transfer.id,
          tenantId: data.tenantId,
          payoutAppId: data.id,
          userId: data.userId,
        },
      },
      { stripeAccount: stripeAccount }
    );

    await stripe.transfers
      .update(detailStripeTransfer?.id as string, {
        metadata: {
          ...transfer.metadata,
          payoutStripeId: payout.id,
          tenantId: data.tenantId,
          payoutAppId: data.id,
        },
      })
      .catch();

    return payout;
  };
