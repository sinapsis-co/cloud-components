import { Construct, Service } from '@sinapsis-co/cc-infra/common/service';
import { ApiAggregate } from '@sinapsis-co/cc-infra/prefab/function/api-function/api-aggregate';
import { BaseFunction } from '@sinapsis-co/cc-infra/prefab/function/base-function';
import { EventAggregate } from '@sinapsis-co/cc-infra/prefab/function/event-function/event-aggregate';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { GlobalProps } from 'config/config-type';
import { GlobalServiceDependencies } from '..';
import { transactionApi } from './catalog';
import { transactionCreate } from './catalog/event';

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
      authPool: this.props.identityBackoffice.authPool,
      autoEventsEnabled: true,
      handlers: {
        listTransactionsOrder: {
          ...transactionApi.listTransactionOrder.config,
        },
        listTransaction: {
          ...transactionApi.listTransaction.config,
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

    this.eventAggregate = new EventAggregate(this, {
      eventBus: this.props.customEventBus.bus,
      baseFunctionFolder: __dirname,
      table: this.apiAggregate.table,
      handlers: {
        eventCreateTransaction: {
          tablePermission: 'readWrite',
          name: 'event-create-transaction',
          eventConfig: [transactionCreate.eventConfig],
        },
      },
    });
  }
}
