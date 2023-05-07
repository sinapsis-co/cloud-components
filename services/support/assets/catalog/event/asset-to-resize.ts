import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';

import { AssetKeyGeneratorParams, ResizeMiddleware } from '../../entities/asset';
import { AssetType } from '../../lib/assets-type';

export type Event = EventInterface<{
  name: 'app.asset.resize';
  payload: {
    assetType: AssetType;
    bucketName: string;
    key: string;
    meta: AssetKeyGeneratorParams;
    resize: ResizeMiddleware;
    nextPartialKey: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.asset.resize',
  source: 'app',
};
