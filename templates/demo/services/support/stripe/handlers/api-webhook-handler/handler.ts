import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { apiStripe, eventsStripe, secretsStripe } from '../../catalog';
import { getStripeClient } from '../../platform/stripe';

export const handler = apiHandler<apiStripe.webhookHandler.Interface>(async (event) => {
  const payload = event.body;
  const signature = event.headers['Stripe-Signature'] || event.headers['stripe-signature'];

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  if (!payload) {
    throw new ApiError('STRIPE-CONNECTOR.WEBHOOK_ERROR', 400);
  }

  try {
    const stripeEvent = getStripeClient({ secrets }).constructEvent(payload, signature!);

    await dispatchEvent<eventsStripe.WebhookEvent.Event<string>>(
      eventsStripe.WebhookEvent.eventConfig(stripeEvent.type),
      stripeEvent
    );
    return {};
  } catch (error) {
    throw new ApiError('STRIPE-CONNECTOR.WEBHOOK_ERROR', 400, JSON.stringify(error));
  }
}, apiStripe.webhookHandler.config);
