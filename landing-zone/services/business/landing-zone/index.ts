import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/api-function/api-aggregate';

import { GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';

import { EventAggregate } from '@sinapsis-co/cc-core/prefab/compute/function/event-function/event-aggregate';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';
import { landingApi, landingEvent } from './catalog';
import { LandingZoneTable } from './store/table-landing';

class Dep extends ServiceDependencies {
  @DepCheck()
  cdnApi: CdnApi;
  @DepCheck()
  globalEventBus: GlobalEventBus;
}

export class LandingZone extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, LandingZoneTable.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'ingredient',
      baseFunctionFolder: __dirname,
      cdnApiPrefab: dep.cdnApi.cdnApiPrefab,
      tableBuilder: LandingZoneTable,
      handlers: {
        get: { ...landingApi.get.definition, cacheMaxAge: 0 },
        create: landingApi.create.definition,
        list: landingApi.list.definition,
        delete: landingApi.delete.definition,
        update: landingApi.update.definition,
      },
    });

    new EventAggregate(this, {
      eventBus: dep.globalEventBus.eventBusPrefab,
      baseFunctionFolder: __dirname,
      handlers: {
        landingCreated: {
          name: 'event-landing-created',
          eventConfig: [landingEvent.created.eventConfig],
        },
      },
    });
  }
}
