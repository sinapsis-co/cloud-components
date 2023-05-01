import { repository } from '@sinapsis-co/cc-sdk/integration/database/dynamo/repository';
import { Repository, RepositoryConfig } from '@sinapsis-co/cc-sdk/integration/database/dynamo/types/repository';
import { UserModel } from '../model/user';

const repoFactory = <Model extends UserModel>(): Repository<Model['Builder'], Model['StoreBuilder']> => {
  const keySerialize = (key: Model['Key']): Model['StoreMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `user#${key.id}`,
    };
  };
  const repoConfig: RepositoryConfig<Model['Builder'], Model['StoreBuilder']> = {
    repoName: 'user',
    tableName: 'identity',
    keySerialize,
    entitySerialize: (key: Model['Key'], body: Model['Builder']['body']): Model['Store'] => {
      const timers: Model['StoreMapping']['timers'] = {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return { ...keySerialize(key), ...body, ...timers };
    },
    entityDeserialize: (entityStore: Model['Store']): Model['Entity'] => {
      const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, id] = sk.split('#');
      return {
        ...att,
        tenantId: pk,
        id,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
      };
    },
  };
  return repository(repoConfig);
};
export const userRepository = repoFactory();
