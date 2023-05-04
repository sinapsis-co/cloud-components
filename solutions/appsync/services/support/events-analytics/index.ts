import { Service } from '@sinapsis-co/cc-core/common/service';
import { EventsAnalyticsPrefab } from '@sinapsis-co/cc-core/prefab/analytics/events';
import { GlobalCoordinator } from '../../../config/config-type';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { GlobalEventBus } from '../global-event-bus';

class Dep extends ServiceDependencies {
  @DepCheck()
  globalEventBus: GlobalEventBus;
}

export class EventsAnalytics extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, EventsAnalytics.name, Dep);
    coordinator.addService(this);
  }
  build(dep: Dep): void {
    new EventsAnalyticsPrefab(this, {
      eventBus: dep.globalEventBus.eventBusPrefab,
      bufferingHints: {
        intervalInSeconds: 60,
        sizeInMBs: 1,
      },
    });
  }
}
