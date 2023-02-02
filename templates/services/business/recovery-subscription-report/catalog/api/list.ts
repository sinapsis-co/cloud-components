import {
  ApiConfig,
  ApiInterface,
  EmptyObject,
  PaginatedQueryParams,
  PaginatedResponse,
} from '@sinapsis-co/cc-platform-v2/catalog/api';

import { UserClaims } from 'services/support/identity-backoffice/entities/user-cognito';
import { RecoverySubscriptionReport } from '../../entities/recoverySubscriptionReport';

export type Interface = ApiInterface<{
  response: PaginatedResponse<RecoverySubscriptionReport>;
  pathParams: EmptyObject;
  body: EmptyObject;
  claims: UserClaims;
  queryParams: PaginatedQueryParams;
}>;

export const config: ApiConfig<Interface> = {
  name: 'api-report-list',
  method: 'GET',
  basePath: 'recovery-subscription-report',
  path: '/',
  tablePermission: 'read',
};
