import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import { Webhook } from 'services/support/stripe/catalog/event';
import { AcceptedCurrencies } from 'services/support/stripe/entities';
import { getStripeClient } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { priceRepository } from '../../repository/price';

export const handler = eventHandler<Webhook.PriceUpdated.Event>(async (event) => {
  const price: Stripe.Price = event.detail.data.object as Stripe.Price;
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const stripe = getStripeClient({ secrets });

  const stripePrice = await stripe.prices.retrieve(price.id, { expand: ['tiers'] });
  const name = stripePrice.recurring!.interval === 'month' ? 'Monthly' : 'Annual';

  await priceRepository.updateItem(
    {
      id: price.metadata.priceId || price.id,
      productId: price?.metadata?.productId || (price.product as string),
    },
    {
      name: name,
      amount: stripePrice.unit_amount!,
      currency: stripePrice.currency as AcceptedCurrencies,
      frequency: stripePrice.recurring!.interval,
      recurrent: stripePrice.recurring ? true : false,
      externalRefs: [{ provider: 'stripe', id: stripePrice.id }],
      isActive: stripePrice.active,
    }
  );
});
