import { SearchEntity } from '../entities/algolia';

export type SearchType = 'user';

export const searchTypes: Record<SearchType, SearchEntity<SearchType>> = {
  user: {
    entity: 'user',
    excludeMyself: false,
    searchInTenant: true,
  },
};
