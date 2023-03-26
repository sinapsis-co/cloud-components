import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-platform/integrations/cognito';
import { identityApi } from 'services/business/identity/catalog';
import { cognitoUpdateStandardMapper } from '../../platform/cognito-mapper';
import { userRepository } from '../../repository/user-repository';

export const handler = apiHandler<identityApi.profileUpdate.Interface>(async (_, req) => {
  const { tenantId, sub, email } = req.claims;

  const [profile] = await Promise.all([
    userRepository.updateItem({ tenantId, id: sub }, req.body),
    updateCognitoUser(email, cognitoUpdateStandardMapper(req.body)),
  ]);
  return profile;
}, identityApi.profileUpdate.config);
