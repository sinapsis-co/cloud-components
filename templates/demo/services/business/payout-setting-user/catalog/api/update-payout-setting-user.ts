import { ApiConfig, ApiInterface, PaginatedQueryParams } from '@sinapsis-co/cc-platform/catalog/api';
import { Schemy } from '@sinapsis-co/cc-platform/lib/schemy';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { PayoutUser, PayoutUserCreate } from '../../entities';
export type Interface = ApiInterface<{
  response: PayoutUser;
  pathParams: {
    id: string;
  };
  body: Partial<PayoutUserCreate>;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-update-setting',
  method: 'PUT',
  basePath: 'setting-payout',
  path: '/{id}',
  tablePermission: 'readWrite',
  schema: Schemy.schema<Interface['body']>({
    isDefault: { type: Boolean, required: true },
  }),
};
