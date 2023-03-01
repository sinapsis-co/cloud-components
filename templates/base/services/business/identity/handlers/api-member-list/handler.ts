import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { identityApi } from 'services/business/identity/catalog';

export const handler = apiHandler<identityApi.memberList.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  const filter = req.queryParams.filter || '';
  const params = filter
    ? {
        KeyConditionExpression: '#pk = :pk AND begins_with(#sk,:sk)',
        ExpressionAttributeNames: {
          '#pk': 'pk',
          '#sk': 'sk',
        },
        ExpressionAttributeValues: {
          ':pk': tenantId,
          ':sk': filter,
        },
      }
    : {};
  return userProfileRepository.listItem(tenantId, { limit: Number(limit) || 50, nextToken }, params);
}, identityApi.memberList.config);
