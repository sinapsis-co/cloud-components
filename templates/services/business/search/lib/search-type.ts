import { SearchEntity } from '../entities/algolia';

export type SearchType = 'base';

export const searchTypes: Record<SearchType, SearchEntity<SearchType>> = {
  base: {
    entity: 'base',
    excludeMyself: false,
    searchInTenant: true,
  },
};
