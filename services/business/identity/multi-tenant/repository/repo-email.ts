import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { EmailModel } from '../model/email';
import { IdentityStoreTable } from '../store/table-identity';

export const repoEmail = repository<IdentityStoreTable, EmailModel>(IdentityStoreTable, {
  type: 'email',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `email#${key.email}`,
      SK: `email#${key.email}`,
    };
  },
  // indexSerialize: () => {
  //   return { GSI_1: { PK: undefined } };
  // },
});
