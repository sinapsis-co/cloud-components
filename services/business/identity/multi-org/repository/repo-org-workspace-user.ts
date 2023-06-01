import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { OrgWorkspaceUserModel } from '../model/org-workspace-user';
import { IdentityStoreTable } from '../store/table-identity';

export const repoOrgWorkspaceUser = repository<IdentityStoreTable, OrgWorkspaceUserModel>(IdentityStoreTable, {
  type: 'OrgWorkspaceUser',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `#ORG#${key.orgId}#WORKSPACE#${key.workspaceId}`,
      SK: `#USER#${key.workspaceId}`,
    };
  },
});
