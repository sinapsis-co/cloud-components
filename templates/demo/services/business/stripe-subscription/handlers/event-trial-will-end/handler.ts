import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { Webhook } from 'services/support/stripe/catalog/event';
import StripeClient from 'stripe';
import * as Event from '../../catalog/event';
import { dateDiffInDays } from '../../lib/date-diff-in-days';
import { parseStripeDate } from '../../lib/parse-stripe-date';

export const handler = eventHandler<Webhook.TrialWillEnd.Event>(async (event) => {
  const subscription: StripeClient.Subscription = event.detail.data.object as StripeClient.Subscription;

  const customerId: string = subscription.metadata.customerId;

  if (!subscription.trial_end) {
    return;
  }

  const endTime: Date = parseStripeDate(subscription.trial_end);
  const today: Date = new Date();

  const leftDays: number = dateDiffInDays(today, endTime);

  if (!subscription.default_payment_method && leftDays > 0) {
    await dispatchEvent<Event.TrialWillFinish.Event>(Event.TrialWillFinish.eventConfig, {
      customerId,
      leftDays,
    });
  }
});
