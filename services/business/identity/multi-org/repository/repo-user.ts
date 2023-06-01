import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { UserModel } from '../model/user';
import { IdentityStoreTable } from '../store/table-identity';

export const repoUser = repository<IdentityStoreTable, UserModel>(IdentityStoreTable, {
  type: 'User',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `#USER#${key.userId}`,
      SK: `#USER#${key.userId}`,
    };
  },
});
