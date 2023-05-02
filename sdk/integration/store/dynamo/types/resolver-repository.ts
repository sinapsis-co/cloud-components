import { EntityBuilder } from '../../../../model';
import { ResolverRepositoryConfig } from './config';
import { TableStoreBuilder } from './table-store-builder';

export type ResolverRepository<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  // events: {
  //   created: {
  //     source: 'app';
  //     name: `app.${EBuilder['name']}.created`;
  //   };
  //   updated: {
  //     source: 'app';
  //     name: `app.${EBuilder['name']}.updated`;
  //   };
  //   deleted: {
  //     source: 'app';
  //     name: `app.${EBuilder['name']}.deleted`;
  //   };
  //   recovered: {
  //     source: 'app';
  //     name: `app.${EBuilder['name']}.recovered`;
  //   };
  // };
  keySerialize: ResolverRepositoryConfig<EBuilder, TBuilder>['keySerialize'];
  bodySerialize: ResolverRepositoryConfig<EBuilder, TBuilder>['bodySerialize'];
  entityDeserialize: ResolverRepositoryConfig<EBuilder, TBuilder>['entityDeserialize'];
};
