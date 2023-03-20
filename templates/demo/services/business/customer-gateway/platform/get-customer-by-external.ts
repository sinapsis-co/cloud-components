import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { Customer } from '../entities/customer';
import { customerRepository } from '../repository';

export const getCustomerByExternal = async (stripeId: string): Promise<Customer> => {
  try {
    const result = await customerRepository.listItem(
      stripeId,
      {
        limit: 1,
      },
      {
        IndexName: 'byStripeId',
        KeyConditionExpression: '#stripeId = :stripeId',
        ExpressionAttributeNames: { '#stripeId': 'stripeId' },
        ExpressionAttributeValues: { ':stripeId': stripeId },
      }
    );

    if (result.items.length === 0) {
      throw new ApiError('STRIPE_CUSTOMER.NOT_FOUND', 404);
    }

    return result.items[0];
  } catch (e) {
    throw new ApiError('STRIPE_CUSTOMER.GET_CUSTOMER_BY_EXTERNAL_ERROR', 500, (e as Error).message);
  }
};
