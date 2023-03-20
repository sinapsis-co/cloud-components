import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { Webhook } from 'services/support/stripe/catalog/event';
import { Stripe } from 'services/support/stripe/platform';
import { ProductCategory } from '../../entities/product/product-category';
import { productRepository } from '../../repository';

export const handler = eventHandler<Webhook.ProductUpdated.Event>(async (event) => {
  const product = event.detail.data.object as Stripe.Product;
  const features = product.metadata.features ? product.metadata.features.split('\\n') : [];
  const category = product.metadata.category as ProductCategory;

  if (product.metadata.isOneTime) {
    return;
  }

  await productRepository.updateItem(
    { id: product.id },
    {
      name: product.name,
      description: product.description || '',
      features: features,
      category,
      externalRefs: [{ provider: 'stripe', id: product.id }],
      active: product.active,
    }
  );
});
