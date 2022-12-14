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

  const customerId = subscription.metadata.customerId;
  const tenantId = subscription.metadata.tenantId;
  const status: SubscriptionStatus = subscription.status;

  await subscriptionRepository.updateItem(
    { tenantId, subscriptionId: subscription.id },
    {
      currentPeriodEnd: parseStripeDate(subscription.current_period_end),
      status: subscription.status,
      trialDaysDuration: calculateTrialDaysDuration(subscription),
    }
  );

  const dispatcher = [
    dispatchEvent<Event.Subscription.StatusUpdated.Event>(Event.Subscription.StatusUpdated.eventConfig, {
      customerId,
      subscription: {
        status,
        currentPeriodEnd: parseStripeDate(subscription.current_period_end),
      },
    }),
  ];

  // when trial ends, the status goes from trialing to active
  if (previousAtt && previousAtt['status'] === 'trialing' && !subscription.default_payment_method) {
    dispatcher.push(
      dispatchEvent<Event.Subscription.TrialFinished.Event>(Event.Subscription.TrialFinished.eventConfig, {
        customerId,
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
