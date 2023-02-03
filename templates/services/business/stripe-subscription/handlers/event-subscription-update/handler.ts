import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { Webhook } from 'services/support/stripe/catalog/event';
import { Stripe } from 'services/support/stripe/platform';
import * as Event from '../../catalog/event';
import { SubscriptionStatus } from '../../entities/subscription';
import { dateDiffInDays } from '../../lib/date-diff-in-days';
import { parseStripeDate } from '../../lib/parse-stripe-date';
import { subscriptionRepository } from '../../repository';

export const handler = eventHandler<Webhook.SubscriptionUpdated.Event>(async (event) => {
  const subscription: Stripe.Subscription = event.detail.data.object as Stripe.Subscription;

  const previousAtt = event.detail.data.previous_attributes;

  const tenantId = subscription.metadata.tenantId;
  const userId = subscription.metadata.userId;
  const status: SubscriptionStatus = subscription.status;

  const sub = await subscriptionRepository.updateItem(
    { tenantId, userId, subscriptionId: subscription.id },
    {
      currentPeriodEnd: parseStripeDate(subscription.current_period_end),
      status: subscription.status,
      trialDaysDuration: calculateTrialDaysDuration(subscription),
      warningMessage: subscription.status === 'past_due' ? 'Payment failed' : null,
    }
  );

  const dispatcher = [
    dispatchEvent<Event.StatusUpdated.Event>(Event.StatusUpdated.eventConfig, {
      userId,
      tenantId,
      subscription: {
        status,
        currentPeriodEnd: parseStripeDate(subscription.current_period_end),
      },
    }),
  ];

  if (subscription.canceled_at && new Date(subscription.canceled_at * 1000) < new Date()) {
    dispatcher.push(
      dispatchEvent<Event.Canceled.Event>(Event.Canceled.eventConfig, {
        userId,
        tenantId,
        subscription: sub,
      })
    );
  }

  // when trial ends, the status goes from trialing to active
  if (previousAtt && previousAtt['status'] === 'trialing' && !subscription.default_payment_method) {
    dispatcher.push(
      dispatchEvent<Event.TrialFinished.Event>(Event.TrialFinished.eventConfig, {
        userId: subscription.metadata.userId,
        tenantId,
        subscriptionId: subscription.id,
      })
    );
  }

  await Promise.all(dispatcher);
});

const calculateTrialDaysDuration = (subscription: Stripe.Subscription): number => {
  if (subscription.trial_start && subscription.trial_end) {
    const trialStart = parseStripeDate(subscription.trial_start);
    const trialEnd = parseStripeDate(subscription.trial_end);

    return Math.abs(dateDiffInDays(trialStart, trialEnd));
  }

  return 0;
};
