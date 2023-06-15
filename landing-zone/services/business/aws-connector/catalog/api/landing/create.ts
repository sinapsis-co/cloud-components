import { ApiDefinition, ApiInterface, EmptyObject } from '@sinapsis-co/cc-sdk/catalog/api';
import { Schemy } from '@sinapsis-co/cc-sdk/lib/schemy';
import { UserClaims } from '@sinapsis-co/cc-services/business/identity/multi-tenant/entities/user-cognito';

export type Interface = ApiInterface<{
  response: { processing: boolean };
  pathParams: EmptyObject;
  body: {
    projectName: string;
    linkedLandingZone?: string;
    credentials: { accessKeyId: string; secretAccessKey: string };
  };
  claims: UserClaims;
  queryParams: EmptyObject;
}>;

export const definition: ApiDefinition<Interface> = {
  name: 'api-landing-create',
  method: 'POST',
  basePath: 'aws',
  path: '/landing',
  tablePermission: 'none',
  schema: Schemy.schema<Interface['body']>({
    projectName: { type: String, required: true },
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
