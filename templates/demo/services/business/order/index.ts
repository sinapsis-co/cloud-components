import { getDomain } from '@sinapsis-co/cc-infra/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { CronAggregate } from '@sinapsis-co/cc-infra/prefab/function/cron-function/cron-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { AttributeType, ProjectionType } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { InvoiceCreated, InvoicePaid } from '../../support/stripe/catalog/event/webhook';
import { CustomerGateway } from '../customer-gateway';
import { api } from './catalog';
import { BY_CUSTOMER_ID } from './repository/gsi';

export type OrderParams = {
  customerGateway: CustomerGateway;
} & GlobalServiceDependencies;

export class Order extends Service<GlobalProps, OrderParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;
  public readonly internals: Record<string, NodejsFunction> = {};

  constructor(scope: Construct, globalProps: GlobalProps, params: OrderParams) {
    super(scope, Order.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'order',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        createOrderIncome: {
          ...api.createOrderIncome.config,
          environment: { MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true) },
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.customerGateway.table, 'readWrite', 'CUSTOMER_TABLE'),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.identity.apiAggregate.table,
                'readWrite',
                'USER_PROFILE_TABLE'
              ),
          ],
          timeout: Duration.seconds(10),
        },
        updateItemOrderIncome: {
          ...api.updateItemOrderIncome.config,
          timeout: Duration.seconds(5),
        },

        getOrder: {
          ...api.getOrder.config,
        },
        listOrder: {
          ...api.listOrder.config,
        },
      },
    });
    this.apiAggregate?.table?.addGlobalSecondaryIndex({
      indexName: 'orderStatus-index',
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'orderStatus',
        type: AttributeType.STRING,
      },
    });
    this.apiAggregate?.table?.addGlobalSecondaryIndex({
      indexName: BY_CUSTOMER_ID,
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'customerId',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'orderStatus',
        type: AttributeType.STRING,
      },
    });
    new CronAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      table: this.apiAggregate.table,
      handlers: {
        cronExpired: {
          name: 'cron-order-expired',
          cronOptions: { minute: '*/10', hour: '*', day: '*', month: '*', year: '*' },
          tablePermission: 'readWrite',
        },
      },
    });
    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventInvoiceCreated: {
          tablePermission: 'readWrite',
          name: 'event-invoice-created',
          eventConfig: [InvoiceCreated.eventConfig],
          modifiers: [this.props.stripeService.SecretReader()],
        },
        eventInvoicePaid: {
          tablePermission: 'readWrite',
          name: 'event-invoice-paid',
          eventConfig: [InvoicePaid.eventConfig],
          modifiers: [this.props.stripeService.SecretReader()],
        },
      },
    });
  }
}
