import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { AttributeType, ProjectionType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { Place } from '../place';
import { Product } from '../product';
import { inventoryApi } from './catalog';

export const BY_CATEGORY_ID_IDX_NAME = 'byCategoryId';

export type InventoryParams = {
  productService: Product;
  placeService: Place;
} & GlobalServiceDependencies;

export class Inventory extends Service<GlobalProps, InventoryParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;
  public readonly table: Table;

  constructor(scope: Construct, globalProps: GlobalProps, params: InventoryParams) {
    super(scope, Inventory.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'inventories',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        createInventory: {
          ...inventoryApi.createInventory.config,
          modifiers: [
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.productService.apiAggregate.table,
                'read',
                'PRODUCT_TABLE'
              ),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.placeService.apiAggregate.table, 'read', 'PLACE_TABLE'),
          ],
        },
        getInventory: inventoryApi.getInventory.config,
        listInventory: inventoryApi.listInventory.config,
        updateInventory: inventoryApi.updateInventory.config,
        deleteInventory: inventoryApi.deleteInventory.config,
      },
    });

    this.table = this.apiAggregate.table!;

    this.table.addGlobalSecondaryIndex({
      indexName: BY_CATEGORY_ID_IDX_NAME,
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'pk',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'categoryId',
        type: AttributeType.STRING,
      },
    });
  }
}
