import {
  ApiDefinition,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsUser } from 'services/business/aws-connector/entities/aws-user';

export type Interface = ApiInterface<{
  response: PaginatedResponse<AwsUser>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-user-list',
  method: 'GET',
  basePath: 'aws',
  path: '/user',
  tablePermission: 'read',
};
