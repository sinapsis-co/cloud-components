import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { RepositoryConfig } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/config';
import { Repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/repository';
import { IngredientModel } from '../model/ingredient';

const repoFactory = <Model extends IngredientModel>(): Repository<Model['Builder'], Model['StoreBuilder']> => {
  const repoConfig: RepositoryConfig<Model['Builder'], Model['StoreBuilder']> = {
    repoName: 'ingredient',
    tableName: 'ingredients',
    keySerialize: (key: Model['Key']): Model['StoreBuilder']['keyMapping'] => {
      return {
        pk: key.id,
      };
    },
    entityDeserialize: (entityStore: Model['Store']): Model['Entity'] => {
      const { pk, ...att } = entityStore;
      return {
        id: pk,
        ...att,
      };
    },
  };
  return repository(repoConfig);
};
export const repoIngredient = repoFactory();
