import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra-v2/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra-v2/prefab/function/event-function/event-aggregate';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { transactionApi } from './catalog';

export type TransactionCrudParams = GlobalServiceDependencies;

export class Transaction extends Service<GlobalProps, TransactionCrudParams> {
  public readonly apiAggregate: ApiAggregate;
  public readonly eventAggregate: EventAggregate;
  public readonly internals: Record<string, NodejsFunction> = {};

  constructor(scope: Construct, globalProps: GlobalProps, params: TransactionCrudParams) {
    super(scope, Transaction.name, globalProps, { params });

    this.apiAggregate = new ApiAggregate(this, {
      basePath: 'transaction',
      baseFunctionFolder: __dirname,
      eventBus: this.props.customEventBus.bus,
      cdnApi: this.props.cdnApi,
      authPool: this.props.identity.authPool,
      autoEventsEnabled: true,
      handlers: {
        listTransactionsOrder: {
          ...transactionApi.listTransactionOrder.config,
        },
      },
    });
    this.internals.createTransaction = new BaseFunction(this, {
      name: 'internal-create-transaction',
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      eventBus: this.props.customEventBus.bus,
      tablePermission: 'write',
      environment: {
        AUTO_EVENTS: 'true',
      },
    }).lambdaFunction;

    this.internals.updateTransaction = new BaseFunction(this, {
      name: 'internal-update-transaction',
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
