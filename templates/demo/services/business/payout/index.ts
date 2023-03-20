import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { payoutApi } from './catalog';
import { payoutGatewayExternal } from './catalog/event/payout';

export const BY_STATUS_IDX_NAME = 'byStatus';

export type PayoutCrudParams = GlobalServiceDependencies;

export class Payout extends Service<GlobalProps, PayoutCrudParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;
  public readonly internals: Record<string, NodejsFunction> = {};

  constructor(scope: Construct, globalProps: GlobalProps, params: PayoutCrudParams) {
    super(scope, Payout.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'payout',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        list: {
          ...payoutApi.payout.listPayout.config,
        },
        getPayout: {
          ...payoutApi.payout.getPayout.config,
        },
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        eventGatewayPayout: {
          name: 'event-payout-gateway',
          eventConfig: [payoutGatewayExternal.eventConfig],
          tablePermission: 'readWrite',
        },
      },
    });

    this.internals.createPayout = new BaseFunction(this, {
      name: 'internal-create-payout',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'write',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;
    this.internals.updatePayout = new BaseFunction(this, {
      name: 'internal-update-payout',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'write',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;
  }
}
