import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { identityApi } from '../../catalog';
import { repoOrgUser } from '../../repository/repo-org-user';

export const handler = apiHandler(async (_, req) => {
  const { sub } = req.claims;
  return repoOrgUser.listIndex('GSI_1', `#USER#${sub}`, { limit: 100 });
}, identityApi.userListOrg.definition);