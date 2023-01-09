import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { payoutSuccess } from '../payout/catalog/event/payout';
import { balanceApi } from './catalog';

export type BalanceCrudParams = GlobalServiceDependencies;

export class Balance extends Service<GlobalProps, BalanceCrudParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;
  public readonly internals: Record<string, NodejsFunction> = {};
  constructor(scope: Construct, globalProps: GlobalProps, params: BalanceCrudParams) {
    super(scope, Balance.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'balance',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        getBalance: {
          ...balanceApi.getBalance.config,
        },
      },
    });

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventPayoutSuccess: {
          tablePermission: 'readWrite',
          name: 'event-payout-success',
          eventConfig: [payoutSuccess.eventConfig],
        },
      },
    });

    this.internals.updateBalance = new BaseFunction(this, {
      name: 'internal-update-balance',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'readWrite',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;
  }
}
