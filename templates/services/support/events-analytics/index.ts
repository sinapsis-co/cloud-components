import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { EventsAnalyticsPrefab } from '@sinapsis-co/cc-infra-v2/prefab/events-analytics';

import { GlobalProps } from '../../../config/config-type';
import { CustomEventBus } from '../custom-event-bus';

export type EventsAnalyticsParams = {
  customEventBus: CustomEventBus;
};

export class EventsAnalytics extends Service<GlobalProps, EventsAnalyticsParams> {
  constructor(scope: Construct, globalProps: GlobalProps, params: EventsAnalyticsParams) {
    super(scope, EventsAnalytics.name, globalProps, { params });

    new EventsAnalyticsPrefab(this, {
      eventBus: params.customEventBus.bus,
      bufferingHints: {
        intervalInSeconds: 60,
        sizeInMBs: 1,
      },
    });
  }
}
