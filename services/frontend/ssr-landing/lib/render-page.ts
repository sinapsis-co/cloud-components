import { User } from '@sinapsis-co/cc-services/business/identity/multi-tenant/model/user';
import { RenderPage } from '../entities/render-page';

// export type RenderPageType = 'base' | 'other';
export type RenderPageType = 'user';

// HINT: RenderPageType will be the root path of the uri
export const renderPageTypes: Record<RenderPageType, RenderPage<RenderPageType>> = {
  user: {
    entity: 'user',
    uriGenerationFn: (entity: User) => `/${entity.id}`,
  },
  // other: {
  //   entity: 'other',
  //   uriGenerationFn: (entity: Other) => `/${entity.id}/${entity.name}`,
  // },
};
