import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { AttributeType, ProjectionType } from 'aws-cdk-lib/aws-dynamodb';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { Inventory } from '../inventory';
import { orderIncomeExpired, orderIncomePaid, orderIncomePending } from '../order/catalog/event/income';
import { inventoryAllocationApi } from './catalog';
import { BY_ORDER_ID_IDX_NAME } from './repository/gsi';

export type InventoryAllocationParams = { inventoryService: Inventory } & GlobalServiceDependencies;

export class InventoryAllocation extends Service<GlobalProps, InventoryAllocationParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: InventoryAllocationParams) {
    super(scope, InventoryAllocation.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'inventory-allocation',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        list: inventoryAllocationApi.list.config,
      },
    });

    this.apiAggregate.table!.addGlobalSecondaryIndex({
      indexName: BY_ORDER_ID_IDX_NAME,
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'pk',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'orderId',
        type: AttributeType.STRING,
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        orderCreated: {
          tablePermission: 'readWrite',
          name: 'event-order-created',
          eventConfig: [orderIncomePending.eventConfig],
          modifiers: [
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.inventoryService.apiAggregate.table,
                'read',
                'INVENTORY_TABLE'
              ),
          ],
        },
        orderUpdated: {
          tablePermission: 'readWrite',
          name: 'event-order-paid',
          eventConfig: [orderIncomePaid.eventConfig],
        },
        orderExpired: {
          tablePermission: 'readWrite',
          name: 'event-order-expired',
          eventConfig: [orderIncomeExpired.eventConfig],
        },
      },
    });
  }
}
