import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-platform-v2/integrations/cognito/admin-ops/update-user-att';
import { cognitoUpdateStandardMapper } from 'services/business/identity/platform/cognito-mapper';
import { identityApi } from 'services/business/identity/catalog';

export const handler = apiHandler<identityApi.profileUpdate.Interface>(async (_, req) => {
  const { tenantId, sub, email } = req.claims;
  const [profile] = await Promise.all([
    userProfileRepository.updateItem({ tenantId, id: `user#${sub}` }, req.body),
    updateCognitoUser(email, cognitoUpdateStandardMapper(req.body)),
  ]);
  return profile;
}, identityApi.profileUpdate.config);
