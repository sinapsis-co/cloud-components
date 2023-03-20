import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import * as api from '../../catalog/api';
import { productRepository } from '../../repository';
import { priceRepository } from '../../repository/price';

export const handler = apiHandler<api.listProducts.Interface>(async () => {
  const [products, prices] = await Promise.all([
    productRepository.listItem('PRODUCT', { limit: 1000 }),
    priceRepository.listItem('PRICE', { limit: 100 }),
  ]);

  return {
    ...products,
    items: products.items.map((product) => ({
      ...product,
      prices: prices.items.filter((price) => price.productId === product.id),
    })),
  };
}, api.listProducts.config);
