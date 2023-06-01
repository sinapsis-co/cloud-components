import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { identityApi } from '../../catalog';
import { viewUsersAndInvites } from '../../repository/views';

export const handler = apiHandler(async (_, req) => {
  const filter = req.queryParams.filter || '';
  const filterMap: Record<typeof filter, string | undefined> = {
    users: '#USER',
    invites: 'INVITE',
    '': undefined,
  };

  const options = filter
    ? {
        keyCondition: '#PK = :PK AND begins_with(#SK,:SK)',
        attributesMap: { PK: req.pathParams.orgId, SK: filterMap[filter] },
      }
    : {
        keyCondition: '#PK = :PK AND begins_with(#SK,:USER) OR begins_with(#SK,:INVITE)',
        attributesMap: { PK: req.pathParams.orgId, USER: filterMap.users, INVITE: filterMap.invites },
      };
  const { items, ...att } = await viewUsersAndInvites.query(
    options.keyCondition,
    options.attributesMap,
    req.queryParams
  );
  return {
    items: items.map((r) => {
      if (r['avatar']) r['avatar'] = `${process.env.MEDIA_URL}/${r['avatar']}`;
      return r;
    }),
    ...att,
  };
}, identityApi.memberList.definition);
