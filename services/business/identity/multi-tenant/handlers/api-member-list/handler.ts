import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { identityApi } from '../../catalog';
import { viewUsersAndInvites } from '../../repository/view-identity';

export const handler = apiHandler(async (_, req) => {
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
  const { items, ...att } = await viewUsersAndInvites.listItem(
    tenantId,
    { limit: Number(limit) || 50, nextToken },
    params
  );
  return {
    items: items.map((r) => {
      if (r['avatar']) r['avatar'] = `${process.env.MEDIA_URL}/${r['avatar']}`;
      return r;
    }),
    ...att,
  };
}, identityApi.memberList.definition);
