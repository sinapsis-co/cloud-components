import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';

import { EventBusPrefab } from '@sinapsis-co/cc-infra-v2/prefab/integration/event-bus';
import { GlobalProps } from '../../../config/config-type';

export class EventBus extends Service {
  public readonly eventBusPrefab: EventBusPrefab;

  constructor(scope: Construct, globalProps: GlobalProps) {
    super(scope, EventBus.name, globalProps, {});

    this.eventBusPrefab = new EventBusPrefab(this);
  }
}
