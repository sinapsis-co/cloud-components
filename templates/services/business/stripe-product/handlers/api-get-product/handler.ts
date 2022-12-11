import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import * as api from '../../catalog/api';
import { productRepository } from '../../repository';
import { priceRepository } from '../../repository/price';

export const handler = apiHandler<api.getProduct.Interface>(async (_, request) => {
  const [product, prices] = await Promise.all([
    productRepository.getItem({ id: request.pathParams.productId }),
    priceRepository.listItem(
      'PRICE',
      { limit: 100 },
      {
        KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
        ExpressionAttributeNames: {
          '#pk': 'pk',
          '#sk': 'sk',
        },
        ExpressionAttributeValues: {
          ':pk': 'PRICE',
          ':sk': request.pathParams.productId,
        },
      }
    ),
  ]);

  return {
    ...product,
    prices: prices.items,
  };
}, api.getProduct.config);
