import { Entity, EntityBuilder, EntityStore } from '../../../../model';
import { TableStoreBuilder } from './table-store-builder';

export type RepositoryConfig<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  repoName: EBuilder['name'];
  tableName: TBuilder['tableName'];
  keySerialize: (key: EntityBuilder<EBuilder>['key']) => TBuilder['keyMapping'];
  entityDeserialize: (entityStore: EntityStore<EBuilder, TBuilder>) => Entity<EBuilder>;
};

export type ViewConfig<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  tableName: TBuilder['tableName'];
  entityDeserialize: (entityStore: EntityStore<EBuilder, TBuilder>) => Entity<EBuilder>;
};
