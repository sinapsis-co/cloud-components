import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { Category } from '../category';
import { productApi } from './catalog';

export type ProductParams = {
  categoryService: Category
} & GlobalServiceDependencies;

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
        createProduct: {
          ...productApi.createProduct.config,
          modifiers: [
            (lambdaFunction) => ServiceTable.addTable(lambdaFunction, this.props.categoryService.apiAggregate.table, 'read', 'CATEGORY_TABLE'),
          ]
        },
        getProduct: productApi.getProduct.config,
        listProduct: productApi.listProduct.config,
        updateProduct: {
          ...productApi.updateProduct.config,
          modifiers: [
            (lambdaFunction) => ServiceTable.addTable(lambdaFunction, this.props.categoryService.apiAggregate.table, 'read', 'CATEGORY_TABLE'),
          ]
        },  
        deleteProduct: productApi.deleteProduct.config
      },
    });
  }
}
