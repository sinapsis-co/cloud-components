import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';
import { RepositoryConfig } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/config';
import { Repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/repository';
import { InviteModel } from '../model/invite';

const repoFactory = <Model extends InviteModel>(): Repository<Model['Builder'], Model['StoreBuilder']> => {
  const repoConfig: RepositoryConfig<Model['Builder'], Model['StoreBuilder']> = {
    repoName: 'invite',
    tableName: 'identity',
    keySerialize: (key: Model['Key']): Model['StoreBuilder']['keyMapping'] => {
      return {
        pk: key.tenantId,
        sk: `invite#${key.id}`,
      };
    },
    entityDeserialize: (entityStore: Model['Store']): Model['Entity'] => {
      const { pk, sk, ...att } = entityStore;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, id] = sk.split('#');
      return {
        tenantId: pk,
        id,
        ...att,
      };
    },
  };
  return repository(repoConfig);
};
export const inviteRepository = repoFactory();
