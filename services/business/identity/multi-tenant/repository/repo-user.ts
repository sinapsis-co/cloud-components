import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { UserModel } from '../model/user';
import { IdentityStoreTable } from '../store/table-identity';

export const repoUser = repository<IdentityStoreTable, UserModel>(IdentityStoreTable, {
  type: 'user',
  tableName: 'identity',
  keySerialize: (key: UserModel['Key']) => {
    return {
      PK: key.tenantId,
      SK: `user#${key.id}`,
    };
  },
  // indexSerialize: (entity: UserModel['Entity']) => {
  //   return { GSI_1: { PK: entity.email } };
  // },
});
