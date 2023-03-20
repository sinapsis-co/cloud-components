import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import { Webhook } from 'services/support/stripe/catalog/event';
import { AcceptedCurrencies } from 'services/support/stripe/entities';
import { getStripeClient, Stripe } from 'services/support/stripe/platform';
import { Product, ProductCreate } from '../../entities/product';

import { productRepository } from '../../repository';
import { priceRepository } from '../../repository/price';

export const handler = eventHandler<Webhook.PriceCreated.Event>(async (event) => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const stripe = getStripeClient({ secrets });

  const priceCreated = event.detail.data.object as Stripe.Price;

  const stripePrice = await stripe.prices.retrieve(priceCreated.id, { expand: ['tiers'] });
  const stripeProduct = await stripe.products.retrieve(priceCreated.product as string);
  const features = stripeProduct.metadata.features ? stripeProduct.metadata.features.split('\\n') : [];

  await getOrCreateProduct(stripeProduct.id, {
    category: 'SUBSCRIPTION',
    name: stripeProduct.name,
    description: stripeProduct.description || '',
    features: features,
    externalRefs: [{ provider: 'stripe', id: stripeProduct.id }],
    active: stripeProduct.active,
  });

  const name = stripePrice.recurring!.interval === 'month' ? 'Monthly' : 'Annual';

  await priceRepository.createItem(
    {
      id: stripePrice.id,
      productId: stripeProduct.id,
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

const getOrCreateProduct = async (id: string, data: ProductCreate): Promise<Product> => {
  let product: Product | undefined;

  try {
    product = await productRepository.getItem({ id });
  } catch {
    // pass-through
  }

  if (!product) {
    return productRepository.createItem({ id }, data);
  }

  return product;
};
