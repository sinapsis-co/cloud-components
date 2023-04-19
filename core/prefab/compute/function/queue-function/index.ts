import { Duration } from 'aws-cdk-lib';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';

import { QueuePrefab, QueuePrefabParams } from 'prefab/integration/queue';

import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type QueueHandlerParams = BaseHandlerParams & {
  queue?: QueuePrefab;
  customQueueParams?: QueuePrefabParams;
  maxConcurrency?: number;
  batchSize?: number;
  batchWindow?: Duration;
};

export type QueueFunctionParams = BaseFunctionParams;

export class QueueFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly customQueue: QueuePrefab;

  constructor(service: Service, params: QueueFunctionParams & QueueHandlerParams) {
    super(service, getLogicalName(QueueFunction.name, params.name));

    this.customQueue = params.queue || new QueuePrefab(service, { name: params.name, ...params.customQueueParams });

    this.lambdaFunction = new BaseFunction(service, {
      ...params,
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'QUEUE' },
    }).lambdaFunction;

    this.lambdaFunction.addEventSource(
      new SqsEventSource(this.customQueue.queue, {
        ...(params.maxConcurrency ? { maxConcurrency: params.maxConcurrency } : {}),
        batchSize: params.batchSize || 10,
        maxBatchingWindow: params.batchWindow,
        reportBatchItemFailures: true,
      })
    );

    this.lambdaFunction.addEnvironment('ORIGIN_QUEUE', this.customQueue.queue.queueUrl);
    this.customQueue.queue.grantConsumeMessages(this.lambdaFunction);
  }
}
