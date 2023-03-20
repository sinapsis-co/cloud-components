import {
    ApiConfig,
    ApiInterface,
    EmptyObject,
    PaginatedQueryParams,
    PaginatedResponse
} from '@sinapsis-co/cc-platform/catalog/api';
import { UserClaims } from 'services/support/identity-backoffice/entities/user-cognito';
import { PaymentClaim } from '../../entities/paymentClaim';

export type Interface = ApiInterface<{
  response: PaginatedResponse<PaymentClaim>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-payment-claims-list',
  method: 'GET',
  basePath: 'claim-payment',
  path: '/',
  tablePermission: 'read',
};
