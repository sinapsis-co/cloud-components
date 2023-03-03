import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { EventsAnalyticsPrefab } from '@sinapsis-co/cc-infra-v2/prefab/analytics/events';

import { GlobalProps } from '../../../config/config-type';
import { EventBus } from '../event-bus';

export type EventsAnalyticsParams = {
  eventBus: EventBus;
};

export class EventsAnalytics extends Service<GlobalProps, EventsAnalyticsParams> {
  constructor(scope: Construct, globalProps: GlobalProps, params: EventsAnalyticsParams) {
    super(scope, EventsAnalytics.name, globalProps, { params });

    new EventsAnalyticsPrefab(this, {
      eventBus: params.eventBus.eventBusPrefab,
      bufferingHints: {
        intervalInSeconds: 60,
        sizeInMBs: 1,
      },
    });
  }
}
