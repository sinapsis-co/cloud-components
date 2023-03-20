import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { createCard } from '../../catalog/api';
import { customerRepository } from '../../repository';

export const handler = apiHandler<createCard.Interface>(async (_, request) => {
  const { stripeId } = await customerRepository.getItem({
    tenantId: request.claims.tenantId,
    userId: request.claims.sub,
  });

  if (!stripeId) {
    throw new Error('Customer not found');
  }

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  await getStripeClient({ secrets }).paymentMethods.attach(request.pathParams.cardId, {
    customer: stripeId,
  });
  return {
    success: true,
  };
}, createCard.config);
