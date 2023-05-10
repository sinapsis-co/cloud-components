import { RepositoryView } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/view';
import { viewRepository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/view';
import { InviteModel } from '../model/invite';
import { UserModel } from '../model/user';
import { IdentityStoreTable } from '../store/table-identity';

export const viewUsersAndInvites: RepositoryView<IdentityStoreTable, UserModel | InviteModel> = viewRepository(
  IdentityStoreTable,
  { tableName: 'identity' }
);
