import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsUser } from 'services/business/aws-connector/entities/aws-user';

export type Interface = ApiInterface<{
  response: AwsUser;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-user-get',
  method: 'GET',
  basePath: 'aws',
  path: '/user/{id}',
  tablePermission: 'read',
};
