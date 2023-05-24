import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { identityApi } from '../../catalog';
import { viewUsersAndInvites } from '../../repository/views';

export const handler = apiHandler(async (_, req) => {
  const { tenantId } = req.claims;
  const { limit, nextToken } = req.queryParams;
  const filter = req.queryParams.filter || '';
  const filterMap: Record<typeof filter, string | undefined> = {
    users: '#USER',
    invites: 'INVITE',
    '': undefined,
  };
  const params = filter
    ? {
        KeyConditionExpression: '#PK = :PK AND begins_with(#SK,:SK)',
        ExpressionAttributeNames: {
          '#PK': 'PK',
          '#SK': 'SK',
        },
        ExpressionAttributeValues: {
          ':PK': tenantId,
          ':SK': filterMap[filter],
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
