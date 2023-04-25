import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { AssetType } from '../../lib/assets-type';

export type Event = EventInterface<{
  name: 'app.asset.remove';
  payload: {
    assetType: AssetType;
    key: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.asset.remove',
  source: 'app',
};
