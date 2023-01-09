import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { eventsStripe, secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { webHookConnect } from '../../catalog/api';

export const handler = apiHandler<webHookConnect.Interface>(async (event) => {
  const payload = event.body;
  const signature = event.headers['Stripe-Signature'] || event.headers['stripe-signature'];

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  if (!payload) {
    throw new ApiError('STRIPE-CONNECTOR.WEBHOOK_ERROR', 400);
  }

  try {
    const stripeEvent = getStripeClient({
      secrets: {
        ...secrets,
        WEBHOOK_SECRET: secrets.WEBHOOK_SECRET_CONNECT!,
      },
    }).constructEvent(payload, signature!);

    await dispatchEvent<eventsStripe.WebhookEvent.Event<string>>(
      eventsStripe.WebhookEvent.eventConfig(stripeEvent.type),
      stripeEvent
    );
    return {};
  } catch (error) {
    throw new ApiError('STRIPE-CONNECTOR.WEBHOOK_ERROR', 400, JSON.stringify(error));
  }
}, webHookConnect.config);
