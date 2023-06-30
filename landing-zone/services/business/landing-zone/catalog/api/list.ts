import { ApiDefinition, ApiInterface, EmptyObject, PaginatedQueryParams } from '@sinapsis-co/cc-sdk/catalog/api';
import { LandingModel } from '../../model/landing';

export type Interface = ApiInterface<{
  response: LandingModel['List'];
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: PaginatedQueryParams;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-landing-list',
  method: 'GET',
  basePath: 'landing',
  path: '/',
  tablePermission: 'read',
};
