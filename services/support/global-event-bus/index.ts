import { ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { EventBusPrefab } from '@sinapsis-co/cc-core/prefab/integration/event-bus';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

class Dep extends ServiceDependencies {}

export class GlobalEventBus extends Service {
  public eventBusPrefab: EventBusPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, GlobalEventBus.name, Dep);
    coordinator.addService(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(dep: Dep): void {
    this.eventBusPrefab = new EventBusPrefab(this);
  }
}
