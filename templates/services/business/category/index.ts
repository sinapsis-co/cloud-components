import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { categoryApi } from './catalog';

export type CategoryParams = GlobalServiceDependencies;

export class Category extends Service<GlobalProps, CategoryParams> {
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: CategoryParams) {
    super(scope, Category.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'categories',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        create: categoryApi.create.config,
        get: categoryApi.get.config,
        list: categoryApi.list.config,
        delete: categoryApi.delete.config,
        update: categoryApi.update.config,
      },
    });
  }
}
