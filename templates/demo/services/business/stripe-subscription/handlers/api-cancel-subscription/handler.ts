import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as api from '../../catalog/api';
import * as Event from '../../catalog/event';
import { stripeSubscription } from '../../platform';
import { subscriptionRepository } from '../../repository';

export const handler = apiHandler<api.cancelSubscription.Interface>(async (_, request) => {
  const { tenantId, sub } = request.claims;

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const { cancelAtEnd } = await subscriptionRepository
    .getItem({
      tenantId,
      userId: sub,
      subscriptionId: request.pathParams.subscriptionId,
    })
    .catch(() => {
      throw new ApiError('SUBSCRIPTION_NOT_FOUND', 404, `Subscription not found: ${request.pathParams.subscriptionId}`);
    });

  if (cancelAtEnd === true) {
    throw new ApiError(
      'SUBSCRIPTION_ALREADY_CANCELED',
      400,
      `Subscription already canceled: ${request.pathParams.subscriptionId}`
    );
  }

  const subscription = await subscriptionRepository.updateItem(
    { subscriptionId: request.pathParams.subscriptionId, tenantId, userId: sub },
    {
      cancelAtEnd: true,
    }
  );

  if (subscription.stripeId) {
    await stripeSubscription({ secrets }).cancel(subscription.stripeId);
  }

  await dispatchEvent<Event.Canceled.Event>(Event.Canceled.eventConfig, {
    tenantId,
    userId: sub,
    subscription,
  });

  return subscription;
}, api.cancelSubscription.config);
