import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Category, CategoryBuilder, CategoryCreate, CategoryStore } from '../entities/category';

export const categoryRepo = repository<CategoryBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'categories',
  keySerialize: (key: CategoryBuilder['key']): CategoryBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `${key.id}#${key.categoryId}`,
    };
  },
  entitySerialize: (key: CategoryBuilder['key'], entityCreate: CategoryCreate): CategoryStore => {
    const mappedKey: CategoryBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.id}#${key.categoryId}`,
    };
    const timers: CategoryBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: CategoryStore): Category => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    const [id, categoryId] = sk.split('#');
    return {
      ...att,
      tenantId: pk,
      id,
      categoryId,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type CategoryRepoEvent = RepositoryEvent<CategoryBuilder>;
