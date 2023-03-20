import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { deleteCard } from '../../catalog/api';
import { customerRepository } from '../../repository';

export const handler = apiHandler<deleteCard.Interface>(async (_, request) => {
  const { stripeId } = await customerRepository.getItem({
    tenantId: request.claims.tenantId,
    userId: request.claims.sub,
  });

  if (!stripeId) {
    throw new Error('Customer not found');
  }

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const stripe = getStripeClient({ secrets });
  const listCards = await stripe.customers.listPaymentMethods(stripeId, {
    type: 'card',
  });
  const paymentId = listCards.data.find((card) => card.id === request.pathParams.cardId);

  if (paymentId) {
    await stripe.paymentMethods.detach(paymentId.id);
    return {
      success: true,
    };
  }
  return {
    success: false,
  };
}, deleteCard.config);
