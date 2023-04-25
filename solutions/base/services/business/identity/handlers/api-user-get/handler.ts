import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { identityApi } from 'services/business/identity/catalog';
import { userRepository } from '../../repository/repo-user';

export const handler = apiHandler<identityApi.userGet.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  const profile = await userRepository.getItem({ tenantId, id: sub });
  if (profile.avatar) profile.avatar = `${process.env.MEDIA_URL}/${profile.avatar}`;
  return profile;
}, identityApi.userGet.config);
