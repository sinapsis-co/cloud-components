import { Service } from '@sinapsis-co/cc-core/common/service';
import { EventsAnalyticsPrefab } from '@sinapsis-co/cc-core/prefab/analytics/events';
import { GlobalCoordinator } from '../../../config/config-type';

import { GlobalEventBus } from '../global-event-bus';

type Deps = { globalEventBus: GlobalEventBus };
const depsNames: Array<keyof Deps> = ['globalEventBus'];

export class EventsAnalytics extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EventsAnalytics.name, depsNames);
    coordinator.addService(this);
  }
  build(deps: Deps) {
    new EventsAnalyticsPrefab(this, {
      eventBus: deps.globalEventBus.eventBusPrefab,
      bufferingHints: {
        intervalInSeconds: 60,
        sizeInMBs: 1,
      },
    });
  }
}
