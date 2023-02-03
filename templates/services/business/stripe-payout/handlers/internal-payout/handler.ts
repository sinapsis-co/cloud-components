import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { secretsStripe } from 'services/support/stripe/catalog';
import Stripe from 'stripe';
import { StripePayout } from '../../entities';
import stripePayout from '../../platform';

export const handler = async ({
  stripePayout: stripePayoutBody,
  detailStripeTransfer,
}: {
  stripePayout: StripePayout;
  detailStripeTransfer: Stripe.Transfer;
}): Promise<any> => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const { payout } = stripePayout({ secrets });

  const itemPayout = await payout({ ...stripePayoutBody, detailStripeTransfer });

  return itemPayout;
};
