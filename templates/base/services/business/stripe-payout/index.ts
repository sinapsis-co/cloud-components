import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { BaseFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { QueueFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/queue-function';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { Duration } from 'aws-cdk-lib';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { Webhook } from '../../support/stripe/catalog/event';
import { StripePayoutWorkflow } from './workflow';

export type StripePayoutParams = GlobalServiceDependencies;

export const BY_STATUS_IDX_NAME = 'byStatus';

export class StripePayout extends Service<GlobalProps, StripePayoutParams> {
  public readonly table: ServiceTable['table'];
  public readonly eventAggregate: EventAggregate;
  public readonly stripePayoutWorkflow: StripePayoutWorkflow;
  public readonly internals: Record<string, BaseFunction> = {};
  public readonly queueErrorStripeError: QueueFunction;

  constructor(scope: Construct, globalProps: GlobalProps, params: StripePayoutParams) {
    super(scope, StripePayout.name, globalProps, { params });

    this.table = new ServiceTable(this, {
      tableName: 'stripe-payout',
    }).table;

    this.internals.createPayoutStripe = new BaseFunction(this, {
      name: 'internal-create',
      baseFunctionFolder: __dirname,
      table: this.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'write',
      timeout: Duration.seconds(30),
      environment: {
        AUTO_EVENTS: 'true',
      },
    });
    this.internals.updatePayoutStripe = new BaseFunction(this, {
      name: 'internal-update-stripe-payout',
      baseFunctionFolder: __dirname,
      table: this.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'write',
      timeout: Duration.seconds(30),
      environment: {
        AUTO_EVENTS: 'true',
      },
    });
    this.internals.createStripeInPayout = new BaseFunction(this, {
      name: 'internal-payout',
      baseFunctionFolder: __dirname,
      table: this.table,
      eventBus: this.props.customEventBus.bus,
      modifiers: [this.props.stripeService.SecretReader()],
      tablePermission: 'none',
      timeout: Duration.seconds(30),
      environment: {
        AUTO_EVENTS: 'true',
      },
    });
    this.internals.createTransfer = new BaseFunction(this, {
      name: 'internal-transfer',
      baseFunctionFolder: __dirname,
      table: this.table,
      eventBus: this.props.customEventBus.bus,
      modifiers: [this.props.stripeService.SecretReader()],
      tablePermission: 'none',
      timeout: Duration.seconds(30),
      environment: {
        AUTO_EVENTS: 'true',
      },
    });

    this.stripePayoutWorkflow = new StripePayoutWorkflow(this, globalProps, {
      ...params,
      createTransfer: this.internals.createTransfer,
      createStripeInPayout: this.internals.createStripeInPayout,
      createStripePayout: this.internals.createPayoutStripe,
      updatePayoutStripe: this.internals.updatePayoutStripe,
    });
    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.table,
      autoEventsEnabled: true,
      handlers: {
        eventPayoutConnect: {
          name: 'event-payout-connect',
          eventConfig: [Webhook.PayoutPaid.eventConfig],
          tablePermission: 'readWrite',
        },
      },
    });
  }
}
