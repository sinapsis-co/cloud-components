import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';
import { Landing } from '../../model/landing';

export type Interface = ApiInterface<{
  response: Landing;
  pathParams: EmptyObject;
  body: {
    name: string;
    linkedLandingZone?: string;
    credentials: { accessKeyId: string; secretAccessKey: string };
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-landing-create',
  method: 'POST',
  basePath: 'landing',
  path: '/',
  tablePermission: 'write',
  schema: Schemy.schema<Interface['body']>({
    name: { type: String, required: true },
    linkedLandingZone: { type: String, required: false },
    credentials: {
      type: {
        accessKeyId: { type: String, required: true },
        secretAccessKey: { type: String, required: true },
      },
      required: true,
    },
  }),
};
