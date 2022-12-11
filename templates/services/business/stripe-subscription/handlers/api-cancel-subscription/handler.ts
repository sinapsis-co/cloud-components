import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as api from '../../catalog/api';
import * as event from '../../catalog/event';
import { stripeSubscription } from '../../platform';
import { subscriptionRepository } from '../../repository';

export const handler = apiHandler<api.cancelSubscription.Interface>(async (_, request) => {
  const { tenantId } = request.claims;

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const subscription = await subscriptionRepository.updateItem(
    { customerId: tenantId },
    {
      cancelAtEnd: true,
    }
  );

  if (subscription.stripeId) {
    await stripeSubscription({ secrets }).cancel(subscription.stripeId);
  }

  await dispatchEvent<event.Subscription.Canceled.Event>(event.Subscription.Canceled.eventConfig, {
    customerId: tenantId,
    subscription,
  });

  return subscription;
}, api.cancelSubscription.config);
