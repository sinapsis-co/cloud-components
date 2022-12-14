import { getDomain } from '@sinapsis-co/cc-infra-v2/common/naming/get-domain';
import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { CronAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/cron-function/cron-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { AttributeType, ProjectionType } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { StripeCustomer } from '../stripe-customer';
import { api } from './catalog';
import { orderIncomeRegister } from './catalog/event/income';

export type OrderParams = {
  stripeCustomer: StripeCustomer;
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
              ServiceTable.addTable(lambdaFunction, this.props.stripeCustomer.table, 'readWrite', 'CUSTOMER_TABLE'),
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
    new CronAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      table: this.apiAggregate.table,
      handlers: {
        cronExpired: {
          name: 'cron-order-expired',
          cronOptions: { minute: '10', hour: '*/1', day: '*', month: '*', year: '*' },
          tablePermission: 'readWrite',
        },
      },
    });
    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventInvoiceSuccess: {
          tablePermission: 'readWrite',
          name: 'event-invoice-success',
          environment: {
            PROJECT_NAME: this.props.projectName,
            WEBAPP_URL: getDomain(this.props.subdomain.webapp, this.props),
            MEDIA_URL: getDomain(this.props.subdomain.media, this.props),
          },
          eventConfig: [orderIncomeRegister.eventConfig],
        },
      },
    });
  }
}
