import { RepositoryView } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/view';
import { viewRepository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/view';
import { EmailModel } from '../model/email';
import { InviteModel } from '../model/invite';
import { UserModel } from '../model/user';
import { IdentityStoreTable } from '../store/table-identity';

export const viewUsersAndInvites: RepositoryView<IdentityStoreTable, UserModel | InviteModel> = viewRepository(
  IdentityStoreTable,
  { tableName: 'identity' }
);

export const viewEmail: RepositoryView<IdentityStoreTable, EmailModel | InviteModel | UserModel> = viewRepository(
  IdentityStoreTable,
  {
    tableName: 'identity',
  }
);
