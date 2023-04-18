import { Service } from '@sinapsis-co/cc-core/common/service';

import { EventBusPrefab } from '@sinapsis-co/cc-core/prefab/integration/event-bus';
import { GlobalCoordinator } from '../../../config/config-type';

type Deps = Record<string, never>;
const depsNames: Array<keyof Deps> = [];

export class GlobalEventBus extends Service {
  public eventBusPrefab: EventBusPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, GlobalEventBus.name, depsNames);
    coordinator.addService(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(_deps = {}) {
    this.eventBusPrefab = new EventBusPrefab(this);
  }
}
