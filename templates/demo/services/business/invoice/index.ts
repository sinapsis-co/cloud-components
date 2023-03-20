import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra/prefab/table/dynamo-table';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { InvoicePaid } from '../../support/stripe/catalog/event/webhook';
import { CustomerGateway } from '../customer-gateway';
import { orderIncomePending } from '../order/catalog/event/income';
import { invoiceApi } from './catalog';

export type InvoiceParams = GlobalServiceDependencies & {
  customerGateway: CustomerGateway;
};

export class Invoice extends Service<GlobalProps, InvoiceParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: InvoiceParams) {
    super(scope, Invoice.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'invoice',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        get: invoiceApi.get.config,
        list: invoiceApi.list.config,
      },
    });
    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventOrderCreated: {
          tablePermission: 'readWrite',
          name: 'event-invoice-created',
          eventConfig: [orderIncomePending.eventConfig],
        },
        eventOrderPaid: {
          tablePermission: 'readWrite',
          name: 'event-invoice-paid',
          eventConfig: [InvoicePaid.eventConfig],
          modifiers: [
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.customerGateway.table, 'read', 'CUSTOMER_TABLE'),
          ],
        },
      },
    });
  }
}
