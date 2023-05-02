import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { Repository, RepositoryConfig } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/repository';
import { IngredientModel } from '../model/ingredient';

const repoFactory = <Model extends IngredientModel>(): Repository<Model['Builder'], Model['StoreBuilder']> => {
  const keySerialize = (key: Model['Key']): Model['StoreMapping']['key'] => {
    return {
      pk: key.id,
    };
  };
  const repoConfig: RepositoryConfig<Model['Builder'], Model['StoreBuilder']> = {
    repoName: 'ingredient',
    tableName: 'ingredients',
    keySerialize,
    entitySerialize: (key: Model['Key'], body: Model['Builder']['body']): Model['Store'] => {
      const timers: Model['StoreMapping']['timers'] = {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return { ...keySerialize(key), ...body, ...timers };
    },
    entityDeserialize: (entityStore: Model['Store']): Model['Entity'] => {
      const { pk, createdAt, updatedAt, ...att } = entityStore;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return {
        ...att,
        id: pk,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
      };
    },
  };
  return repository(repoConfig);
};
export const ingredientsRepo = repoFactory();
