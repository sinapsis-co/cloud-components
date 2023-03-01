import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { baseApi } from './catalog';

export type BaseCrudParams = GlobalServiceDependencies;

export class BaseCrud extends Service<GlobalProps, BaseCrudParams> {
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: BaseCrudParams) {
    super(scope, BaseCrud.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'base',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        create: baseApi.create.config,
        get: baseApi.get.config,
        list: baseApi.list.config,
        delete: baseApi.delete.config,
        update: baseApi.update.config,
      },
    });
  }
}
