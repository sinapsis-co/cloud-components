import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { invoiceApi } from '../../catalog';
import { invoiceRepository } from '../../repository/invoice';

export const handler = apiHandler<invoiceApi.list.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  const { limit, nextToken } = req.queryParams;

  return await invoiceRepository.listItem(
    `${tenantId}`,
    { limit: Number(limit) || 50, nextToken },
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
}, invoiceApi.list.config);
