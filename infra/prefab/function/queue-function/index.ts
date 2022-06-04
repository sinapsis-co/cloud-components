import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';
import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { CustomQueue, CustomQueueParams } from '../../queue/custom-queue';

export type QueueHandlerProps = NodejsFunctionProps & {
  name: string;
  queue?: CustomQueue;
  customQueueParams?: CustomQueueParams;
  batchSize?: number;
  batchWindow?: Duration;
  environment?: Record<string, string>;
  tablePermission?: TablePermission;
  modifiers?: ((lambda: NodejsFunction) => any)[];
};

export type QueueFunctionProps = QueueHandlerProps & {
  baseFunctionFolder: string;
  eventBus?: CustomEventBusParams;
  table?: Table;
  compiled?: true;
};

export class QueueFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly customQueue: CustomQueue;

  constructor(scope: Construct, props: BaseServiceProps, params: QueueFunctionProps) {
    super(scope, getLogicalName(QueueFunction.name, params.name));

    this.customQueue = params.queue || new CustomQueue(this, props, { name: params.name });

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_14_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      environment: params.environment || {},
      ...params,
    });

    params.modifiers?.map((fn) => fn(this.lambdaFunction));

    this.lambdaFunction.addEventSource(
      new SqsEventSource(this.customQueue.queue, {
        batchSize: params.batchSize || 10,
        maxBatchingWindow: params.batchWindow,
      })
    );

    this.lambdaFunction.addEnvironment('ORIGIN_QUEUE', this.customQueue.queue.queueUrl);
    this.customQueue.queue.grantConsumeMessages(this.lambdaFunction);

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
