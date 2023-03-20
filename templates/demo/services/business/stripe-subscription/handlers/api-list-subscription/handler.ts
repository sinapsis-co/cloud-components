import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import * as api from '../../catalog/api';
import { subscriptionRepository } from '../../repository';

export const handler = apiHandler<api.listSubscription.Interface>(async (_, request) => {
  const { tenantId, sub } = request.claims;
  const { limit, nextToken } = request.queryParams;

  const subscription = await subscriptionRepository.listItem(
    tenantId,
    {
      limit: Number(limit || 50),
      nextToken,
    },
    {
      KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#sk': 'sk',
      },
      ExpressionAttributeValues: {
        ':pk': `${tenantId}`,
        ':sk': `${sub}`,
      },
    }
  );

  return subscription;
}, api.listSubscription.config);
