import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { AssetKeyGeneratorParams, ResizeMiddleware } from 'services/business/assets/entities/asset';
import { AssetType } from 'services/business/assets/lib/assets-type';

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
