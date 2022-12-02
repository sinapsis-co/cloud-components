import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';

import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { Inventory } from '../inventory';
import { orderEvent } from '../order/catalog';
import { inventoryAllocationApi } from './catalog';

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

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        orderCreated: {
          tablePermission: 'readWrite',
          name: 'event-order-created',
          eventConfig: [
            {
              ...orderEvent.created.eventConfig,
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
          ],
        },
        orderUpdated: {
          tablePermission: 'readWrite',
          name: 'event-order-paid',
          eventConfig: [orderEvent.paid.eventConfig],
        },
      },
    });
  }
}
