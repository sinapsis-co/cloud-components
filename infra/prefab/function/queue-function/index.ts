import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { CustomQueue, CustomQueueParams } from '../../queue/custom-queue';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type QueueHandlerParams = BaseHandlerParams & {
  queue?: CustomQueue;
  customQueueParams?: CustomQueueParams;
  batchSize?: number;
  batchWindow?: Duration;
};

export type QueueFunctionParams = BaseFunctionParams;

export class QueueFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly customQueue: CustomQueue;

  constructor(service: Service, params: QueueFunctionParams & QueueHandlerParams) {
    super(service, getLogicalName(QueueFunction.name, params.name));

    this.customQueue = params.queue || new CustomQueue(service, { name: params.name, ...params.customQueueParams });

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    this.lambdaFunction.addEventSource(
      new SqsEventSource(this.customQueue.queue, {
        batchSize: params.batchSize || 10,
        maxBatchingWindow: params.batchWindow,
      })
    );

    this.lambdaFunction.addEnvironment('ORIGIN_QUEUE', this.customQueue.queue.queueUrl);
    this.customQueue.queue.grantConsumeMessages(this.lambdaFunction);
  }
}
