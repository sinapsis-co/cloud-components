import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { Canceled, InvoicePaid, PaymentFailed } from '../stripe-subscription/catalog/event';
import { paymentClaimApi } from './catalog';

export type PaymentClaimParams = GlobalServiceDependencies;

export class PaymentClaim extends Service<GlobalProps, PaymentClaimParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: PaymentClaimParams) {
    super(scope, PaymentClaim.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'claim-payment',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identityBackoffice.authPool,
      autoEventsEnabled: true,
      handlers: {
        list: paymentClaimApi.list.config,
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventFailed: {
          tablePermission: 'readWrite',
          name: 'event-payment-failed',
          eventConfig: [PaymentFailed.eventConfig],
          modifiers: [
            (lm) => ServiceTable.addTable(lm, this.props.identity.apiAggregate.table, 'read', 'USER_PROFILE'),
          ],
        },
        eventPaymentRenewed: {
          tablePermission: 'readWrite',
          name: 'event-payment-renewed',
          eventConfig: [InvoicePaid.eventConfig, Canceled.eventConfig],
        },
      },
    });
  }
}
