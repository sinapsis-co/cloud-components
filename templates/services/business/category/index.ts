import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { categoryApi } from './catalog';

export type CategoryParams = GlobalServiceDependencies;

export class Category extends Service<GlobalProps, CategoryParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

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
        createCategory: categoryApi.createCategory.config,
      },
    });
  }
}
