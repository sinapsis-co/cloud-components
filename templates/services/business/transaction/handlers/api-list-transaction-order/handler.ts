import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { transactionApi } from '../../catalog';
import { transactionRepo } from '../../repository';

export const handler = apiHandler<transactionApi.listTransactionOrder.Interface>(async (_, req) => {
  const { limit, nextToken } = req.queryParams;
  const { sub } = req.claims;
  const { orderId } = req.pathParams;

  const data = await transactionRepo.listItem(
    req.pathParams.orderId,
    { limit: Number(limit) || 50, nextToken },
    {
      KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#sk': 'sk',
      },
      ExpressionAttributeValues: {
        ':pk': sub,
        ':sk': orderId,
      },
    }
  );
  return {
    ...data,
    items: data.items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  };
}, transactionApi.listTransactionOrder.config);
