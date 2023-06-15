import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { LandingModel } from '../../model/landing';

export type Interface = ApiInterface<{
  response: LandingModel['Entity'];
  pathParams: LandingModel['Key'];
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-landing-delete',
  method: 'DELETE',
  basePath: 'landing',
  path: '/{id}',
  tablePermission: 'write',
};
