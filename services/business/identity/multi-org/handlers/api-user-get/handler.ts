import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { repoUser } from '../../repository/repo-user';

export const handler = apiHandler(async (_, req) => {
  const { sub } = req.claims;
  const profile = await repoUser.getItem({ userId: sub });
  if (profile.avatar) profile.avatar = `${process.env.MEDIA_URL}/${profile.avatar}`;
  return profile;
}, identityApi.userGet.definition);
