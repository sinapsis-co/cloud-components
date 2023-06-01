import { RepositoryView } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/repo-view';
import { viewRepository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/view';
import { EmailModel } from '../model/email';
import { InviteModel } from '../model/invite';
import { OrgModel } from '../model/org';
import { OrgUserModel } from '../model/org-user';
import { OrgWorkspaceModel } from '../model/org-workspace';
import { OrgWorkspaceUserModel } from '../model/org-workspace-user';
import { UserModel } from '../model/user';
import { WorkspaceModel } from '../model/workspace';
import { IdentityStoreTable } from '../store/table-identity';

export const viewUsersAndInvites: RepositoryView<IdentityStoreTable, UserModel | InviteModel> = viewRepository(
  IdentityStoreTable,
  { tableName: 'identity' }
);

export const viewEmail: RepositoryView<IdentityStoreTable, EmailModel | InviteModel | UserModel> = viewRepository(
  IdentityStoreTable,
  { tableName: 'identity' }
);

export const viewTransact: RepositoryView<
  IdentityStoreTable,
  UserModel | EmailModel | OrgModel | OrgUserModel | WorkspaceModel | OrgWorkspaceModel | OrgWorkspaceUserModel
> = viewRepository(IdentityStoreTable, {
  tableName: 'identity',
});
