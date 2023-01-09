import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { listCard } from '../../catalog/api';
import { customerRepository } from '../../repository';

export const handler = apiHandler<listCard.Interface>(async (_, request) => {
  const { stripeId } = await customerRepository.getItem({
    tenantId: request.claims.tenantId,
    userId: request.claims.sub,
  });

  if (!stripeId) {
    throw new Error('Customer not found');
  }

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const stripe = getStripeClient({ secrets });
  const { data } = await stripe.customers.listPaymentMethods(stripeId, {
    type: 'card',
  });
  return data;
}, listCard.config);
