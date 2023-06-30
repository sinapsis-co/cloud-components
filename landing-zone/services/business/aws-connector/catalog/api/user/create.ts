import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsUser, AwsUserCreate } from 'services/business/aws-connector/entities/aws-user';

export type Interface = ApiInterface<{
  response: AwsUser;
  pathParams: EmptyObject;
  body: Omit<AwsUserCreate, 'accessKeyId'>;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-user-create',
  method: 'POST',
  basePath: 'aws',
  path: '/user',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    email: { type: String, required: true },
    envAccess: { type: [String], required: true },
  }),
};
