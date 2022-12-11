import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as eventCatalog from '../../catalog/event';
import stripeSubscription from '../../platform/subscription';
import { subscriptionRepository } from '../../repository';

/**
 * Handles the event of a trial ending and cancels the subscription to avoid Stripe grace period of 30 days.
 * @param {string} event.detail.customerId - The customer ID (tenantId) of the subscription to cancel.
 */
export const handler = eventHandler<eventCatalog.Subscription.TrialFinished.Event>(async (event) => {
  const { customerId } = event.detail;

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const subscription = await subscriptionRepository.updateItem({ customerId }, { cancelAtEnd: true });

  if (subscription.stripeId) {
    // cancel subscription immediately
    await stripeSubscription({ secrets }).cancel(subscription.stripeId, true);
  }

  await dispatchEvent<eventCatalog.Subscription.Canceled.Event>(eventCatalog.Subscription.Canceled.eventConfig, {
    customerId,
    subscription,
  });
});
