import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { listOrder } from 'services/order/catalog/api';
import { orderRepo } from 'services/order/repository';
import { REQUIRED_TYPE } from 'services/order/utils/errors';
import { errorApi } from 'support-service/utils/api-error';

export const handler = apiHandler<listOrder.Interface>(async (_, req) => {
  const { sub: pk } = req.claims;
  const { nextToken, type, from } = req.queryParams;

  if (!type) {
    throw errorApi(REQUIRED_TYPE);
  }

  const queryInput = {
    FilterExpression: 'orderType = :type',
    ExpressionAttributeValues: {
      ':pk': pk,
      ':type': type,
    },
    ExpressionAttributeNames: { '#pk': 'pk' },
  };

  if (from) {
    queryInput.FilterExpression += ' and createdAt >= :createdAt';
    queryInput.ExpressionAttributeValues[':createdAt'] = from;
  }

  if (req.queryParams.type === 'WITHDRAWAL') {
    queryInput.FilterExpression += ' and (orderStatus = :oss OR orderStatus = :osp OR orderStatus = :opr)';
    queryInput.ExpressionAttributeValues[':oss'] = 'SUCCESS';
    queryInput.ExpressionAttributeValues[':osp'] = 'PENDING';
    queryInput.ExpressionAttributeValues[':opr'] = 'PROCESS';
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
