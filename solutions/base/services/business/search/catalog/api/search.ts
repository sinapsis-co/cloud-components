import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { AlgoliaSearchRequest, AlgoliaSearchResponse } from '../../entities/algolia';

export type Interface = ApiInterface<{
  response: AlgoliaSearchResponse<any>;
  pathParams: EmptyObject;
  body: AlgoliaSearchRequest;
  claims: UserClaims;
  queryParams: { nextToken?: string };
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-search',
  method: 'POST',
  basePath: 'search',
  path: '/',
  tablePermission: 'none',
  schema: Schemy.schema<Interface['body']>({
    entity: { type: String, required: true },
    query: { type: String, required: true },
  }),
};
