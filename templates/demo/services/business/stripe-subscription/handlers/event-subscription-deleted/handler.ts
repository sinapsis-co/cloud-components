import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { Webhook } from 'services/support/stripe/catalog/event';
import StripeClient from 'stripe';
import * as Event from '../../catalog/event';
import { parseStripeDate } from '../../lib/parse-stripe-date';
import { subscriptionRepository } from '../../repository';

/**
 * Handles the webhook event of a deleted subscription from Stripe (canceled).
 * @param {StripeClient.Subscription} event.detail.data.object - The canceled subscription object.
 */
export const handler = eventHandler<Webhook.SubscriptionDeleted.Event>(async (event) => {
  const subscription: StripeClient.Subscription = event.detail.data.object as StripeClient.Subscription;
  const tenantId = subscription.metadata.tenantId;
  const userId = subscription.metadata.userId;

  // when a subscription is deleted, the status goes from active to canceled
  const subscriptionItem = await subscriptionRepository.updateItem(
    { tenantId, subscriptionId: subscription.id, userId },
    { status: subscription.status }
  );

  await dispatchEvent<Event.StatusUpdated.Event>(Event.StatusUpdated.eventConfig, {
    tenantId,
    userId,
    subscription: {
      status: subscription.status,
      currentPeriodEnd: parseStripeDate(subscription.current_period_end),
    },
  });

  await dispatchEvent<Event.Canceled.Event>(Event.Canceled.eventConfig, {
    tenantId,
    userId,
    subscription: subscriptionItem,
  });
});
