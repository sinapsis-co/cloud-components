import { ApiConfig, ApiInterface, EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { Invoice } from '../../entities/invoice';

export type Interface = ApiInterface<{
  response: Invoice;
  pathParams: { id: string };
  body: EmptyObject;
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-invoice-get',
  method: 'GET',
  basePath: 'invoice',
  path: '/{id}',
  tablePermission: 'read',
};
