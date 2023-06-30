import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsUser, AwsUserUpdate } from 'services/business/aws-connector/entities/aws-user';

export type Interface = ApiInterface<{
  response: AwsUser;
  pathParams: { id: string };
  body: AwsUserUpdate;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-user-update',
  method: 'PUT',
  basePath: 'aws',
  path: '/user/{id}',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    envAccess: { type: [String], required: true },
  }),
};
