import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { landingApi } from '../../catalog';
import { repoLanding } from '../../repository/repo-landing';

export const handler = apiHandler(async (_, req) => {
  //Using null as PK I'm forcing the scan
  return await repoLanding.listItem(null, req.queryParams);
}, landingApi.list.definition);
