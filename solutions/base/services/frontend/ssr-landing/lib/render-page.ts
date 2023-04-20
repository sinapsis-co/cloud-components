import { Base } from '../../../business/base-crud/entities/base';
import { RenderPage } from '../entities/render-page';

// export type RenderPageType = 'base' | 'other';
export type RenderPageType = 'base';

// HINT: RenderPageType will be the root path of the uri
export const renderPageTypes: Record<RenderPageType, RenderPage<RenderPageType>> = {
  base: {
    entity: 'base',
    uriGenerationFn: (entity: Base) => `/${entity.id}`,
  },
  // other: {
  //   entity: 'other',
  //   uriGenerationFn: (entity: Other) => `/${entity.id}/${entity.name}`,
  // },
};
