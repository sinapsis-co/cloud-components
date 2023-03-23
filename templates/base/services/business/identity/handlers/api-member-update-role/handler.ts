import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-platform/integrations/cognito';

import { identityApi } from 'services/business/identity/catalog';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { CustomError } from '../../../../../config/error-catalog';
import { authScope } from '../../platform/authorization';
import { cognitoUpdateCustomMapper } from '../../platform/cognito-mapper';

export const handler = apiHandler<identityApi.memberUpdateRole.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  if (!Object.keys(authScope).includes(req.body.role)) throw new CustomError({ code: 'ERROR_IDENTITY_INVALID_ROLE' });
  const user = await userProfileRepository.updateItem({ tenantId, id: `user#${req.pathParams.id}` }, req.body);
  await updateCognitoUser(user.email, cognitoUpdateCustomMapper(req.body));
  return user;
}, identityApi.memberUpdateRole.config);
