import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
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
  const customerId = subscription.metadata.customerId;

  // when a subscription is deleted, the status goes from active to canceled
  await subscriptionRepository.updateItem({ customerId }, { status: subscription.status });

  await dispatchEvent<Event.Subscription.StatusUpdated.Event>(Event.Subscription.StatusUpdated.eventConfig, {
    customerId,
    subscription: {
      status: subscription.status,
      currentPeriodEnd: parseStripeDate(subscription.current_period_end),
    },
  });
});
