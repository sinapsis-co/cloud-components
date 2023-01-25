import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { ServiceTable } from '@sinapsis-co/cc-infra-v2/prefab/table/dynamo-table';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalServiceDependencies } from '..';
import { GlobalProps } from '../../../config/config-type';
import { payoutSettingUserApi } from './catalog';
import { settingUserExternalPayout } from './catalog/event';

export type PayoutSettingUserCrudParams = GlobalServiceDependencies;

export class PayoutSettingUser extends Service<GlobalProps, PayoutSettingUserCrudParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;
  public readonly tableSettingPayout: ServiceTable['table'];
  public readonly internals: Record<string, NodejsFunction> = {};

  constructor(scope: Construct, globalProps: GlobalProps, params: PayoutSettingUserCrudParams) {
    super(scope, PayoutSettingUser.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'setting-payout',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        listSettingPayoutUser: {
          ...payoutSettingUserApi.listSettingPayoutUser.config,
        },
        updateSettingPayoutUser: {
          ...payoutSettingUserApi.updateSettingPayoutUser.config,
        },
      },
    });
    this.internals.getSetting = new BaseFunction(this, {
      name: 'internal-get-setting',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'read',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      autoEventsEnabled: true,
      handlers: {
        eventSettingExternalPayoutUser: {
          name: 'event-external-setting',
          eventConfig: [settingUserExternalPayout.eventConfig],
          tablePermission: 'readWrite',
        },
      },
    });
  }
}
