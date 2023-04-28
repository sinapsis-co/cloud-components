import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';

import { CustomError } from 'solutions/base/config/error-catalog';
import { identityApi } from '../../catalog';
import { authScope } from '../../platform/authorization';
import { cognitoUpdateCustomMapper } from '../../platform/cognito-mapper';
import { userRepository } from '../../repository/repo-user';

export const handler = apiHandler<identityApi.memberUpdateRole.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  if (!Object.keys(authScope).includes(req.body.role)) throw new CustomError({ code: 'ERROR_IDENTITY_INVALID_ROLE' });
  const user = await userRepository.updateItem({ tenantId, id: req.pathParams.id }, req.body);
  await updateCognitoUser(user.email, cognitoUpdateCustomMapper(req.body));
  return user;
}, identityApi.memberUpdateRole.config);