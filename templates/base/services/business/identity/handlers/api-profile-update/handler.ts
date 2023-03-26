import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-platform/integrations/cognito';
import { identityApi } from 'services/business/identity/catalog';
import { cognitoUpdateStandardMapper } from '../../platform/cognito-mapper';
import { inviteRepository } from '../../repository/invite-repository';

export const handler = apiHandler<identityApi.profileUpdate.Interface>(async (_, req) => {
  const { tenantId, sub, email } = req.claims;

  const [profile] = await Promise.all([
    inviteRepository.updateItem({ tenantId, id: `user#${sub}` }, req.body),
    updateCognitoUser(email, cognitoUpdateStandardMapper(req.body)),
  ]);
  return profile;
}, identityApi.profileUpdate.config);
