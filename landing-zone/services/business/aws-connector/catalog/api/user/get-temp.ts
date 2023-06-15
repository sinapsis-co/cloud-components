import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { AwsTempCred } from 'services/business/aws-connector/entities/aws-temp-cred';

export type Interface = ApiInterface<{
  response: AwsTempCred;
  pathParams: { id: string };
  body: EmptyObject;
  claims: EmptyObject;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  isPublic: true,
  name: 'api-aws-temp-get',
  method: 'GET',
  basePath: 'aws',
  path: '/temp/{id}',
  tablePermission: 'readWrite',
};
