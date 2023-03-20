import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-platform/integrations/cognito/admin-ops/update-user-att';
import { identityApi } from 'services/business/identity/catalog';
import { cognitoUpdateCustomMapper } from 'services/business/identity/platform/cognito-mapper';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { authScope } from '../../platform/authorization';

export const handler = apiHandler<identityApi.memberUpdateRole.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  if (!Object.keys(authScope).includes(req.body.role)) throw new ApiError('InvalidRole', 400);
  const user = await userProfileRepository.updateItem({ tenantId, id: `user#${req.pathParams.id}` }, req.body);
  await updateCognitoUser(user.email, cognitoUpdateCustomMapper(req.body));
  return user;
}, identityApi.memberUpdateRole.config);
