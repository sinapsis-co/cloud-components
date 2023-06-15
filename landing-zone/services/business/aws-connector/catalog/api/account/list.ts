import {
  ApiDefinition,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsAccount, EnrichedAwsAccount } from 'services/business/aws-connector/entities/aws-account';

export type Interface = ApiInterface<{
  response: PaginatedResponse<AwsAccount & EnrichedAwsAccount>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-account-list',
  method: 'GET',
  basePath: 'aws',
  path: '/account',
  tablePermission: 'none',
};
