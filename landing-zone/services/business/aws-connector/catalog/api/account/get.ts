import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsAccount, EnrichedAwsAccount } from 'services/business/aws-connector/entities/aws-account';

export type Interface = ApiInterface<{
  response: AwsAccount & EnrichedAwsAccount;
  pathParams: { projectName: string; envName: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-account-get',
  method: 'GET',
  basePath: 'aws',
  path: '/account/{projectName}/{envName}',
  tablePermission: 'none',
};
