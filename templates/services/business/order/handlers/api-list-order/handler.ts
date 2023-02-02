import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { listOrder } from '../../catalog/api';
import { orderRepo } from '../../repository';

export const handler = apiHandler<listOrder.Interface>(async (_, req) => {
  const { tenantId: pk, sub } = req.claims;
  const { nextToken, type, from } = req.queryParams;

  const queryInput = {
    KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
    FilterExpression: 'orderType = :type',
    ExpressionAttributeValues: {
      ':pk': pk,
      ':type': type,
      ':sk': `${sub}`,
    },
    ExpressionAttributeNames: { '#pk': 'pk', '#sk': 'sk' },
  };

  if (from) {
    queryInput.FilterExpression += ' and createdAt >= :createdAt';
    queryInput.ExpressionAttributeValues[':createdAt'] = from;
  }

  if (req.queryParams.type === 'INCOME') {
    queryInput.FilterExpression += ' and (orderStatus = :oss OR orderStatus = :opr)';
    queryInput.ExpressionAttributeValues[':oss'] = 'SUCCESS';
    queryInput.ExpressionAttributeValues[':opr'] = 'PROCESS';
  }

  const { items, nextToken: nextTokenDb } = await orderRepo.listItem(
    pk,
    { limit: 1000, nextToken },
    {
      ...queryInput,
    }
  );

  return {
    nextToken: nextTokenDb,
    items: items.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
  };
}, listOrder.config);
