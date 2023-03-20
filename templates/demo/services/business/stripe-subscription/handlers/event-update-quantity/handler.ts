import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as Event from '../../catalog/event';
import { stripeSubscription } from '../../platform';

export const handler = eventHandler<Event.Seats.Added.Event | Event.Seats.Deleted.Event>(async (event) => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const { updateQuantity } = stripeSubscription({ secrets });

  const { subscription } = event.detail;

  if (!subscription.stripeId) {
    return;
  }

  await updateQuantity({ subscriptionId: subscription.stripeId, newQuantity: subscription.seats });
});
