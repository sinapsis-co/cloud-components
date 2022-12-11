import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { paymentRepository } from '../payment/repository';
import { api } from './catalog';

export type OrderParams = GlobalServiceDependencies;

export class Order extends Service<GlobalProps, OrderParams> {
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;

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
        getOrder: {
          ...api.getOrder.config,
        },
        listOrder: {
          ...api.listOrder.config,
        },
      },
    });
    this.eventAggregate = new EventAggregate(this, {
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        paymentSuccess: {
          tablePermission: 'readWrite',
          eventConfig: [paymentRepository.events.created],
          name: 'event-payment-success',
        },
      },
    });
  }
}
