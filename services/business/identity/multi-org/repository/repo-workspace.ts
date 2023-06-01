import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { WorkspaceModel } from '../model/workspace';
import { IdentityStoreTable } from '../store/table-identity';

export const repoWorkspace = repository<IdentityStoreTable, WorkspaceModel>(IdentityStoreTable, {
  type: 'Workspace',
  tableName: 'identity',
  keySerialize: (key) => {
    return {
      PK: `#WORKSPACE#${key.workspaceId}`,
      SK: `#WORKSPACE#${key.workspaceId}`,
    };
  },
});
