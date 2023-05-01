import { repository } from '@sinapsis-co/cc-sdk/integration/database/dynamo';
import {
  Entity,
  EntityStore,
  Repository,
  RepositoryConfig,
} from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { IngredientEntityBuilder } from '../entities/ingredient';
import { IngredientsTableBuilder } from '../table/table-ingredient';

const repoBuilder = <E extends IngredientEntityBuilder, T extends IngredientsTableBuilder>(): Repository<E, T> => {
  const repoConfig: RepositoryConfig<E, T> = {
    tableName: 'ingredients',
    repoName: 'ingredient',
    keySerialize: (key: E['key']): T['storeMapping']['key'] => {
      return {
        pk: key.id,
      };
    },
    entitySerialize: (key: E['key'], entityCreate): EntityStore<E, T> => {
      const mappedKey: T['storeMapping']['key'] = {
        pk: key.id,
      };
      const timers: T['storeMapping']['timers'] = {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return { ...mappedKey, ...entityCreate, ...timers };
    },
    entityDeserialize: (entityStore: EntityStore<E, T>): Entity<E> => {
      const { pk, createdAt, updatedAt, ...att } = entityStore;
      return {
        ...att,
        id: pk,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
      };
    },
  };
  return repository<E, T>(repoConfig);
};
export const ingredientsRepo = repoBuilder();
