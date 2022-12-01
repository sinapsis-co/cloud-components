import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { inventoryEvent } from '../inventory/catalog';
import { stockApi } from './catalog';

export type StockParams = GlobalServiceDependencies;

export class Stock extends Service<GlobalProps, StockParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: StockParams) {
    super(scope, Stock.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'stocks',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        getStock: stockApi.getStock.config,
        listStock: stockApi.listStock.config
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        createStock: {
          name: 'event-inventory-created',
          eventConfig: [inventoryEvent.inventoryCreated.eventConfig],
          tablePermission: 'readWrite',
        },
        inventoryDeleted: {
          name: 'event-inventory-deleted',
          eventConfig: [inventoryEvent.inventoryDeleted.eventConfig],
          tablePermission: 'readWrite',
        },
        inventoryUpdated: {
          name: 'event-inventory-updated',
          eventConfig: [inventoryEvent.inventoryUpdated.eventConfig],
          tablePermission: 'readWrite',
        }
      },
    });

  }
}
