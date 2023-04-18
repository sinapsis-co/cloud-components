export type AlgoliaConfig = {
  ALGOLIA_API_KEY: string;
  ALGOLIA_APPLICATION_ID: string;
};

export type AlgoliaEntity = { id: string } & Record<string, any>;

export type SearchEntity<SearchType = string> = {
  entity: SearchType;
  searchInTenant: boolean;
  excludeMyself: boolean;
};

export type AlgoliaSearchResponse<Entity> = {
  entities: Entity[];
  nextToken?: string;
  total: number;
};

export type AlgoliaSearchRequest = {
  entity: string;
  query: string;
};
