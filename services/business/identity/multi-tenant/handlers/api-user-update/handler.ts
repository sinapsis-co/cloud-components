import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { updateCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';

import { identityApi } from '../../catalog';
import { cognitoUpdateStandardMapper } from '../../platform/cognito-mapper';
import { repoUser } from '../../repository/repo-user';

export const handler = apiHandler(async (_, req) => {
  const { tenantId, sub, email } = req.claims;

  const [profile] = await Promise.all([
    repoUser.updateItem({ tenantId, id: sub }, req.body),
    updateCognitoUser(email, cognitoUpdateStandardMapper(req.body)),
  ]);
  return profile;
}, identityApi.userUpdate.definition);
