import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { identityApi } from 'services/business/identity/catalog';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';

export const handler = apiHandler<identityApi.profileGet.Interface>(async (_, req) => {
  const { tenantId, sub } = req.claims;
  const profile = await userProfileRepository.getItem({ tenantId, id: sub });
  if (profile.avatar) profile.avatar = `${process.env.MEDIA_URL}/${profile.avatar}`;
  return profile;
}, identityApi.profileGet.config);
