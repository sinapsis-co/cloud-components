import { Base } from '../../../business/base-crud/entities/base';
import { Other } from '../../../business/base-event/entities/other';
import { RenderPage } from '../entities/render-page';

export type RenderPageType = 'base' | 'other';

// HINT: RenderPageType will be the root path of the uri
export const renderPageTypes: Record<RenderPageType, RenderPage<RenderPageType>> = {
  base: {
    entity: 'base',
    uriGenerationFn: (entity: Base) => `/${entity.id}`,
  },
  other: {
    entity: 'other',
    uriGenerationFn: (entity: Other) => `/${entity.id}/${entity.name}`,
  },
};
