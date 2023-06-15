import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { AwsAccount, AwsAccountCreate } from '../../../entities/aws-account';

export type AccountCreateParams = Omit<AwsAccountCreate, 'account' | 'roleName' | 'email'> & {
  envName: string;
  projectName: string;
  isClientAccount?: boolean;
};
export type Interface = ApiInterface<{
  response: AwsAccount;
  pathParams: EmptyObject;
  body: AccountCreateParams;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-aws-account-create',
  method: 'POST',
  basePath: 'aws',
  path: '/account',
  tablePermission: 'none',
  schema: Schemy.schema<Interface['body']>({
    envName: { type: String, required: true },
    projectName: { type: String, required: true },
    isClientAccount: { type: Boolean, required: false },
  }),
};
