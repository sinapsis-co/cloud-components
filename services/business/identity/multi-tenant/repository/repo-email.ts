import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { EmailModel } from '../model/email';
import { IdentityStoreTable } from '../store/table-identity';

export const repoEmail = repository<IdentityStoreTable, EmailModel>(IdentityStoreTable, {
  type: 'Email',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `EMAIL#${key.email}`,
      SK: `EMAIL#${key.email}`,
    };
  },
  // indexSerialize: () => {
  //   return { GSI_1: { PK: undefined } };
  // },
});
