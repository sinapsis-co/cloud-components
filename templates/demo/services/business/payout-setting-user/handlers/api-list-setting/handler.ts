import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { payoutSettingUserApi } from '../../catalog';
import { payoutUserRepo } from '../../repository';

export const handler = apiHandler<payoutSettingUserApi.listSettingPayoutUser.Interface>(async (_, req) => {
  const { sub, tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;

  return await payoutUserRepo.listItem(
    `${tenantId}`,
    { limit: Number(limit || 50), nextToken },
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
}, payoutSettingUserApi.listSettingPayoutUser.config);
