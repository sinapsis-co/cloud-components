import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/event-function/event-aggregate';
import { RuntimeSecret } from '@sinapsis-co/cc-infra-v2/prefab/util/config/runtime-secret';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { baseRepo } from '../base-crud/repository/base';
import { searchApi, searchSecret } from './catalog';

export type SearchServiceParams = GlobalServiceDependencies;

export class Search extends Service<GlobalProps, SearchServiceParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;
  public readonly secret: RuntimeSecret;

  constructor(scope: Construct, globalProps: GlobalProps, params: SearchServiceParams) {
    super(scope, Search.name, globalProps, { params });

    this.secret = new RuntimeSecret(this, searchSecret.algolia);

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.eventBus.eventBusPrefab,
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
      eventBus: this.props.eventBus.eventBusPrefab,
      cdnApi: this.props.cdnApi.cdnApiPrefab,
      authPool: this.props.identity.authPool,
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
