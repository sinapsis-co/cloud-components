import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { AssetKeyGeneratorParams } from 'services/business/assets/entities/asset';

export type Event = EventInterface<{
  name: 'app.asset.uploaded';
  payload: {
    assetType: string;
    bucketName: string;
    key: string;
    meta: AssetKeyGeneratorParams;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.asset.uploaded',
  source: 'app',
};
