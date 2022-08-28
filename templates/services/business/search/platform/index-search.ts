import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import algoliasearch from 'algoliasearch';
import { UserClaims } from '../../identity/entities/user-cognito';
import { UserProfile } from '../../identity/entities/user-profile';
import { AlgoliaConfig, AlgoliaSearchResponse, SearchEntity } from '../entities/algolia';
import { searchTypes } from '../lib/search-type';

export const algoliaIndexSearch = async (
  algoliaConfig: AlgoliaConfig,
  entityName: string,
  query: string,
  claims: UserClaims,
  page?: string
): Promise<AlgoliaSearchResponse<UserProfile>> => {
  const { ALGOLIA_API_KEY, ALGOLIA_APPLICATION_ID } = algoliaConfig;
  const client = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(`${process.env.ENV_NAME}_${entityName}`);

  const searchType: SearchEntity = searchTypes[entityName];
  if (!searchType) throw new ApiError('InvalidSearchType', 400);
  const filters: string[] = [];
  if (searchType.excludeMyself) filters.push(`NOT id:${claims.sub}`);
  if (searchType.searchInTenant) filters.push(`tenantId:${claims.tenantId}`);

  const results = await index
    .search<UserProfile>(query, {
      filters: filters.join(' AND '),
      page: parseInt(page || '0'),
      hitsPerPage: 50,
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(e.message));
      throw e;
    });

  const nextToken = page || 0 >= results.nbPages - 1 ? undefined : String(parseInt(page || '0') + 1);
  const total = results.nbHits;
  const entities = results.hits.map((e) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { objectID, _highlightResult, ...att } = e;
    return att;
  });

  return { nextToken, total, entities };
};
