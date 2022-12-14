import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { Webhook } from '../../support/stripe/catalog/event';
import { api } from './catalog';

export type StripeProductParams = GlobalServiceDependencies;

export class StripeProduct extends Service<GlobalProps, StripeProductParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: StripeProductParams) {
    super(scope, StripeProduct.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'stripe-product',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: { ...this.props.cdnApi },
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        getProduct: { ...api.getProduct.config },
        listProducts: api.listProducts.config,
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        createPrice: {
          name: 'event-create-price',
          eventConfig: [Webhook.PriceCreated.eventConfig],
          tablePermission: 'readWrite',
          modifiers: [this.props.stripeService.SecretReader()],
        },
        priceUpdate: {
          name: 'event-update-price',
          eventConfig: [Webhook.PriceUpdated.eventConfig],
          tablePermission: 'write',
          modifiers: [this.props.stripeService.SecretReader()],
        },
        productCreated: {
          name: 'event-create-product',
          eventConfig: [Webhook.ProductCreated.eventConfig],
          tablePermission: 'write',
        },
        productUpdated: {
          name: 'event-update-product',
          eventConfig: [Webhook.ProductUpdated.eventConfig],
          tablePermission: 'write',
        },
      },
    });
  }
}
