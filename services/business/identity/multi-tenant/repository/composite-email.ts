import { compositeRepository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/composite';
import { RepositoryComposite } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/composite';
import { IdentityStoreTable } from '../store/table-identity';

export const compositeEmail: RepositoryComposite = compositeRepository(IdentityStoreTable, {
  tableName: 'identity',
});
