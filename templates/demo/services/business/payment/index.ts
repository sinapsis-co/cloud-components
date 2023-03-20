import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { CustomerGateway } from '../customer-gateway';
import { Order } from '../order';
import { api } from './catalog';

export type PaymentParams = {
  customerGateway: CustomerGateway;
  orderService: Order;
} & GlobalServiceDependencies;

export class Payment extends Service<GlobalProps, PaymentParams> {
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: PaymentParams) {
    super(scope, Payment.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'payment',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        payment: {
          ...api.createPayment.config,
          timeout: Duration.seconds(30),
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.customerGateway.table, 'readWrite', 'CUSTOMER_TABLE'),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.orderService.apiAggregate.table,
                'readWrite',
                'ORDER_TABLE'
              ),
          ],
        },
      },
    });
  }
}
