import { Duration } from 'aws-cdk-lib';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';

import { QueuePrefab, QueuePrefabParams } from 'prefab/integration/queue';

import { SynthError } from 'common/synth/synth-error';
import { BaseFunction, BaseAggregateParams, BaseHandlerParams, FUNCTION_DEFAULT_TIMEOUT } from '../base-function';

export type QueueHandlerParams = BaseHandlerParams & {
  queuePrefab?: QueuePrefab;
  queuePrefabParams?: Partial<QueuePrefabParams>;
  maxConcurrency?: number;
  batchSize?: number;
  batchWindow?: Duration;
  visibilityTimeoutRatio?: number;
};

export type QueueFunctionParams = BaseAggregateParams;

export class QueueFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly queuePrefab: QueuePrefab;

  constructor(service: Service, params: QueueFunctionParams & QueueHandlerParams) {
    super(service, getLogicalName(QueueFunction.name, params.name));

    if (params.visibilityTimeoutRatio && params.visibilityTimeoutRatio < 1) {
      throw new SynthError('Visibility timeout ratio must be greater than or equal to 1', service.props);
    }

    // Visibility timeout is declared, must be greater than or equal to the timeout
    if (
      params.queuePrefabParams?.visibilityTimeout &&
      (params.timeout?.toSeconds() || FUNCTION_DEFAULT_TIMEOUT) >
        params.queuePrefabParams?.visibilityTimeout.toSeconds()
    ) {
      throw new SynthError('Visibility timeout must be greater than or equal to the function timeout', service.props);
    }

    this.queuePrefab =
      params.queuePrefab ||
      new QueuePrefab(service, {
        name: params.name,
        visibilityTimeout: Duration.seconds((params.timeout?.toSeconds() || 6) * (params.visibilityTimeoutRatio || 2)),
        ...params.queuePrefabParams,
      });

    this.lambdaFunction = new BaseFunction(service, {
      ...params,
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'QUEUE' },
    }).lambdaFunction;

    this.lambdaFunction.addEventSource(
      new SqsEventSource(this.queuePrefab.queue, {
        ...(params.maxConcurrency ? { maxConcurrency: params.maxConcurrency } : {}),
        batchSize: params.batchSize || 10,
        maxBatchingWindow: params.batchWindow,
        reportBatchItemFailures: true,
      })
    );

    // In case the lambda function needs to operate on the queue manually
    this.lambdaFunction.addEnvironment('ORIGIN_QUEUE', this.queuePrefab.queue.queueUrl);
    this.queuePrefab.queue.grantConsumeMessages(this.lambdaFunction);
  }
}
