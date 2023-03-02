import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { Duration } from 'aws-cdk-lib';
import { AttributeType, ProjectionType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { userProfileRepository } from '../identity/repository/user-profile-repository';
import { api } from './catalog';

export type CustomerStripeParams = GlobalServiceDependencies;

export const BY_STRIPE_ID_IDX_NAME = 'byStripeId';

export class CustomerGateway extends Service<GlobalProps, CustomerStripeParams> {
  public readonly table: Table;
  public readonly eventAggregate: EventAggregate;
  public readonly apiAggregate: ApiAggregate;

  constructor(scope: Construct, globalProps: GlobalProps, params: CustomerStripeParams) {
    super(scope, CustomerGateway.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'customer-gateway',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        getCustomer: { ...api.getCustomer.config, modifiers: [this.props.stripeService.SecretReader()] },
        createCard: { ...api.createCard.config, modifiers: [this.props.stripeService.SecretReader()] },
        deleteCard: { ...api.deleteCard.config, modifiers: [this.props.stripeService.SecretReader()] },
        listCard: { ...api.listCard.config, modifiers: [this.props.stripeService.SecretReader()] },
      },
    });
    this.table = this.apiAggregate.table!;

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.table,
      autoEventsEnabled: true,
      handlers: {
        updateCustomer: {
          tablePermission: 'readWrite',
          name: 'event-update-customer',
          timeout: Duration.seconds(5),
          modifiers: [this.props.stripeService.SecretReader()],
          eventConfig: [userProfileRepository.events.updated],
        },
      },
    });

    this.table.addGlobalSecondaryIndex({
      indexName: BY_STRIPE_ID_IDX_NAME,
      projectionType: ProjectionType.ALL,
      partitionKey: {
        name: 'stripeId',
        type: AttributeType.STRING,
      },
    });
  }
}
