import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomQueue, CustomQueueParams } from '../../queue/custom-queue';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';

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

  constructor(scope: Construct, props: BaseServiceProps, params: QueueFunctionParams & QueueHandlerParams) {
    super(scope, getLogicalName(QueueFunction.name, params.name));

    this.customQueue = params.queue || new CustomQueue(this, props, { name: params.name });

    this.lambdaFunction = new BaseFunction(this, props, params).lambdaFunction;

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
