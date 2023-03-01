import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { Transaction } from 'services/business/transaction/entities';
import { secretsStripe } from 'services/support/stripe/catalog';
import Stripe from 'stripe';
import { StripePayout } from '../../entities';
import stripePayout from '../../platform';

export const handler = async ({
  stripePayout: stripePayoutBody,
  transaction,
}: {
  stripePayout: StripePayout;
  transaction: Transaction;
}): Promise<Stripe.Transfer> => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const { transferToConnect } = stripePayout({ secrets });
  const {
    amount,
    tenantId,
    detailPayout: { target, id: payoutId },
  } = stripePayoutBody;

  const transfer = await transferToConnect(amount, target?.id as string, 'USD', {
    description: 'Available to Connect',
    metadata: {
      tenantId,
      payoutId: payoutId,
      transactionId: transaction.id,
    },
  });
  return transfer;
};
