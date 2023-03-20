import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-platform/integrations/cognito/admin-ops/update-user-att';
import { identityApi } from 'services/business/identity/catalog';
import { cognitoUpdateStandardMapper } from 'services/business/identity/platform/cognito-mapper';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';

export const handler = apiHandler<identityApi.profileUpdate.Interface>(async (_, req) => {
  const { tenantId, sub, email } = req.claims;
  const [profile] = await Promise.all([
    userProfileRepository.updateItem({ tenantId, id: sub }, req.body),
    updateCognitoUser(email, cognitoUpdateStandardMapper(req.body)),
  ]);
  return profile;
}, identityApi.profileUpdate.config);
