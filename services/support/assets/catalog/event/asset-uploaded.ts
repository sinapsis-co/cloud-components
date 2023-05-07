import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';

import { AssetKeyGeneratorParams } from '../../entities/asset';

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
