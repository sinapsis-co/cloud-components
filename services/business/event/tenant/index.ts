import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

import { GlobalEventBus } from '../../../support/global-event-bus';
import { identityEvent } from '../../identity/multi-tenant/catalog';

class Dep extends ServiceDependencies {
  @DepCheck() globalEventBus: GlobalEventBus;
}

export class Tenant extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Tenant.name, Dep);
    coordinator.addService(this);
  }

  build(deps: Dep) {
    new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      handlers: {
        tenantCreated: {
          name: 'event-tenant-created',
          eventConfig: [identityEvent.tenantCreated.eventConfig],
        },
        tenantDeleted: {
          name: 'event-tenant-created',
          eventConfig: [identityEvent.tenantCreated.eventConfig],
        },
      },
    });
  }
}
