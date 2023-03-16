import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { getSecret } from '@sinapsis-co/cc-platform-v2/integrations/config/secret/get-secret';
import { searchApi, searchSecret } from '../../catalog';
import { algoliaIndexSearch } from '../../platform/index-search';

export const handler = apiHandler<searchApi.search.Interface>(async (_, req) => {
  // const { tenantId } = req.claims;
  const { entity, query } = req.body;
  const algoliaConfig = await getSecret<searchSecret.algolia.Secret>(searchSecret.algolia.secretConfig);
  return await algoliaIndexSearch(algoliaConfig, entity, query, req.claims, req.queryParams.nextToken);
}, searchApi.search.config);
