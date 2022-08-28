import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { identityApi } from 'services/business/identity/catalog';

export const handler = apiHandler<identityApi.profileGet.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  const profile = await userProfileRepository.getItem({ tenantId, id: sub });
  if (profile.avatar) profile.avatar = `${process.env.MEDIA_URL}/${profile.avatar}`;
  return profile;
}, identityApi.profileGet.config);
