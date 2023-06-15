import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { repoOrgUser } from '../../repository/repo-org-user';

export const handler = apiHandler(async (_, req) => {
  const { userId, orgId } = req.pathParams;
  return repoOrgUser.updateItem({ orgId, userId }, req.body);
}, identityApi.memberUpdateRole.definition);
