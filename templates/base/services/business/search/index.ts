import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/event-function/event-aggregate';
import { RuntimeSecret } from '@sinapsis-co/cc-infra-v2/prefab/util/config/runtime-secret';
import { GlobalCoordinator } from '../../../config/config-type';
import { CdnApi } from '../../support/cdn-api';
import { GlobalEventBus } from '../../support/global-event-bus';
import { baseRepo } from '../base-crud/repository/base';
import { Identity } from '../identity';
import { searchApi, searchSecret } from './catalog';

type Deps = {
  globalEventBus: GlobalEventBus;
  cdnApi: CdnApi;
  identity: Identity;
};
const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
export class Search extends Service<GlobalCoordinator> {
  public apiAggregate: ApiAggregate;
  public eventAggregate: EventAggregate;
  public secret: RuntimeSecret;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, Search.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.secret = new RuntimeSecret(this, searchSecret.algolia);

    this.eventAggregate = new EventAggregate(this, {
      eventBus: deps.globalEventBus.eventBusPrefab,
      baseFunctionFolder: __dirname,
      handlers: {
        entityChanged: {
          name: 'event-entity-changed',
          eventConfig: Object.values(baseRepo.events),
          modifiers: [this.secret.useModReader()],
          environment: {
            ENV_NAME: this.props.envName,
          },
        },
      },
    });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'search',
      baseFunctionFolder: __dirname,
      eventBus: deps.globalEventBus.eventBusPrefab,
      cdnApiPrefab: deps.cdnApi.cdnApiPrefab,
      authPool: deps.identity.authPool,
      skipTable: true,
      handlers: {
        search: {
          ...searchApi.search.config,
          modifiers: [this.secret.useModReader()],
          environment: {
            ENV_NAME: this.props.envName,
          },
        },
      },
    });
  }
}
