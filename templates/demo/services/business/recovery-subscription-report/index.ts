import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { recoverySubscriptionReportApi } from './catalog';

export type RecoverySubscriptionReportParams = GlobalServiceDependencies;

export class RecoverySubscriptionReport extends Service<GlobalProps, RecoverySubscriptionReportParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: RecoverySubscriptionReportParams) {
    super(scope, RecoverySubscriptionReport.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'recovery-subscription-report',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identityBackoffice.authPool,
      autoEventsEnabled: true,
      handlers: {
        list: recoverySubscriptionReportApi.list.config,
      },
    });
    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        // eventFailed: {
        //   tablePermission: 'readWrite',
        //   name: 'event-payment-failed',
        //   eventConfig: [PaymentFailed.eventConfig],
        // },
        // eventPaymentRenewed: {
        //   tablePermission: 'readWrite',
        //   name: 'event-payment-renewed',
        //   eventConfig: [InvoicePaid.eventConfig, Canceled.eventConfig],
        // },
        // eventFirstFailed: {
        //   tablePermission: 'readWrite',
        //   name: 'event-first-failed',
        //   eventConfig: [PaymentFailedFirst.eventConfig],
        // },
      },
    });
  }
}
