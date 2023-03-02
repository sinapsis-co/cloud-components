import { Order } from '../entities';
import { orderRepo } from '../repository';
import { BY_CUSTOMER_ID } from '../repository/gsi';

export const getOrderByCustomer = async (
  customerId: string,
  orderStatus: string
): Promise<{ exist: boolean; entity?: Order }> => {
  const response = await orderRepo.listItem(
    '',
    { limit: 10 },
    {
      IndexName: BY_CUSTOMER_ID,
      KeyConditionExpression: '#customerId = :customerId AND #orderStatus = :orderStatus',
      ExpressionAttributeNames: {
        '#customerId': 'customerId',
        '#orderStatus': 'orderStatus',
      },
      ExpressionAttributeValues: {
        ':customerId': customerId,
        ':orderStatus': orderStatus,
      },
    }
  );

  if (!response.items.length) {
    return {
      exist: false,
      entity: undefined,
    };
  }

  return {
    exist: true,
    entity: response.items[0],
  };
};
