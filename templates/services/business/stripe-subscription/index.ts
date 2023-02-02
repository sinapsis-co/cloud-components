import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { Webhook } from '../../support/stripe/catalog/event';
import { InvoicePaid, InvoicePaymentRequired, PaymentFailed } from '../../support/stripe/catalog/event/webhook';
import { CustomerGateway } from '../customer-gateway';
import { Order } from '../order';
import { api, event } from './catalog';

export type StripeServiceParams = {
  customerGateway: CustomerGateway;
  serviceOrder: Order;
} & GlobalServiceDependencies;

export class StripeSubscription extends Service<GlobalProps, StripeServiceParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: StripeServiceParams) {
    super(scope, StripeSubscription.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'stripe-subscription',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: { ...this.props.cdnApi },
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        getSubscription: api.getSubscription.config,
        createSubscription: {
          ...api.createSubscription.config,
          timeout: Duration.seconds(30),
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.customerGateway.table, 'readWrite', 'CUSTOMER_TABLE'),
            (lambdaFunction) =>
              ServiceTable.addTable(
                lambdaFunction,
                this.props.serviceOrder.apiAggregate.table,
                'readWrite',
                'ORDER_TABLE'
              ),
          ],
        },
        updateSubscription: {
          ...api.updateSubscription.config,
          timeout: Duration.seconds(30),
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.customerGateway.table, 'read', 'CUSTOMER_TABLE'),
          ],
        },
        cancelSubscription: { ...api.cancelSubscription.config, modifiers: [this.props.stripeService.SecretReader()] },
        listSubscription: api.listSubscription.config,
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        trialWillEnd: {
          name: 'event-trial-will-end',
          eventConfig: [Webhook.TrialWillEnd.eventConfig],
          tablePermission: 'read',
        },
        subscriptionUpdate: {
          name: 'event-subscription-update',
          eventConfig: [Webhook.SubscriptionUpdated.eventConfig],
          tablePermission: 'write',
        },
        quantityUpdate: {
          name: 'event-update-quantity',
          eventConfig: [event.Seats.Added.eventConfig, event.Seats.Deleted.eventConfig],
          tablePermission: 'read',
          modifiers: [this.props.stripeService.SecretReader()],
        },
        subscriptionDeleted: {
          name: 'event-subscription-deleted',
          eventConfig: [Webhook.SubscriptionDeleted.eventConfig],
          tablePermission: 'write',
        },
        trialFinished: {
          name: 'event-trial-finished',
          eventConfig: [event.TrialFinished.eventConfig],
          tablePermission: 'write',
        },
        eventPaymentFailed: {
          name: 'event-payment-failed',
          eventConfig: [PaymentFailed.eventConfig, InvoicePaymentRequired.eventConfig],
          tablePermission: 'write',
          modifiers: [
            this.props.stripeService.SecretReader(),
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.serviceOrder.apiAggregate.table, 'read', 'ORDER_TABLE'),
          ],
        },
        eventPaymentRenewed: {
          name: 'event-payment-renewed',
          eventConfig: [InvoicePaid.eventConfig],
          tablePermission: 'readWrite',
          modifiers: [
            (lambdaFunction) =>
              ServiceTable.addTable(lambdaFunction, this.props.serviceOrder.apiAggregate.table, 'read', 'ORDER_TABLE'),
          ],
        },
      },
    });
  }
}
