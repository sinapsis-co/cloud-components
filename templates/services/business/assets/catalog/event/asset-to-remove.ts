import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { AssetType } from 'services/business/assets/lib/assets-type';

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
