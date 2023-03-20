import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { Webhook } from 'services/support/stripe/catalog/event';
import { Stripe } from 'services/support/stripe/platform';
import { productRepository } from '../../repository';

export const handler = eventHandler<Webhook.ProductCreated.Event>(async (event) => {
  const product = event.detail.data.object as Stripe.Product;
  const features = product.metadata.features ? product.metadata.features.split('\\n') : [];

  if (product.metadata.isOneTime) {
    return;
  }

  await productRepository.createItem(
    { id: product.id },
    {
      category: 'SUBSCRIPTION',
      name: product.name,
      description: product.description || '',
      features: features,
      externalRefs: [{ provider: 'stripe', id: product.id }],
      active: product.active,
    }
  );
});
