import { EntityBuilder } from '../../../model';
import { ResolverRepositoryConfig } from './types/config';
import { ResolverRepository } from './types/resolver-repository';
import { TableStoreBuilder } from './types/table-store-builder';

export const resolverRepository = <Builder extends EntityBuilder, Table extends TableStoreBuilder>(
  repoConfig: ResolverRepositoryConfig<Builder, Table>
): ResolverRepository<Builder, Table> => {
  return {
    keySerialize: repoConfig.keySerialize,
    bodySerialize: repoConfig.bodySerialize,
    entityDeserialize: repoConfig.entityDeserialize,
  };
};
