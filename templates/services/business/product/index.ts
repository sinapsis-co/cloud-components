import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { productApi } from './catalog';

export type ProductParams = GlobalServiceDependencies;

export class Product extends Service<GlobalProps, ProductParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: ProductParams) {
    super(scope, Product.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'products',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        createPlace: productApi.createProduct.config,
        getPlace: productApi.getProduct.config
      },
    });
  }
}
