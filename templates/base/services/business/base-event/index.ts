import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/compute/function/api-function/api-aggregate';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { otherApi } from './catalog';

export type BaseCrudParams = GlobalServiceDependencies;

export class BaseEvent extends Service<GlobalProps, BaseCrudParams> {
  public readonly apiAggregate: unknown;

  constructor(scope: Construct, globalProps: GlobalProps, params: BaseCrudParams) {
    super(scope, BaseEvent.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'other',
      baseFunctionFolder: __dirname,
      eventBus: this.props.eventBus.eventBusPrefab,
      cdnApi: this.props.cdnApi.cdnApiPrefab,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        create: otherApi.create.config,
        get: otherApi.get.config,
        list: otherApi.list.config,
        delete: otherApi.delete.config,
        update: otherApi.update.config,
      },
    });
  }
}
