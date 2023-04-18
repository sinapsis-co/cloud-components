import { Service } from '@sinapsis-co/cc-core/common/service';

import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { GlobalEventBus } from '../../support/global-event-bus';
import { Identity } from '../identity';

import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { baseEvent } from '../base-crud/catalog';

type Deps = {
  globalEventBus: GlobalEventBus;
  cdnApi: CdnApi;
  identity: Identity;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
export class BaseEvent extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, BaseEvent.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      handlers: {
        baseCreated: {
          name: 'event-base-created',
          eventConfig: [baseEvent.created.eventConfig],
        },
      },
    });
  }
}
