import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { userRepository } from '../../repository/repo-user';

export const handler = apiHandler(async (_, req) => {
  const { tenantId, sub } = req.claims;
  const profile = await userRepository.getItem({ tenantId, id: sub });
  if (profile.avatar) profile.avatar = `${process.env.MEDIA_URL}/${profile.avatar}`;
  return profile;
}, identityApi.userGet.definition);
