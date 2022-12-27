import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { InventoryAllocation } from '../inventory-allocation';
import { Stock } from '../stock';
import { stockReportApi } from './catalog';

export type StockReportParams = {
  inventoryAllocation: InventoryAllocation;
  stock: Stock;
} & GlobalServiceDependencies;

export class StockReport extends Service<GlobalProps, StockReportParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: StockReportParams) {
    super(scope, StockReport.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'stock-report',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      skipTable: true,
      handlers: {
        list: {
          ...stockReportApi.list.config,
          modifiers: [
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.stock.apiAggregate.table, 'read', 'STOCK_TABLE'),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.inventoryAllocation.apiAggregate.table,
                'read',
                'INVENTORY_ALLOCATION_TABLE'
              ),
          ],
        },
      },
    });
  }
}
