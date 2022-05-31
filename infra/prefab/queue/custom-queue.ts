import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type CustomQueueParams = {
  name: string;
  maxRetries?: number;
  dlqRetention?: Duration;
  visibilityTimeout?: Duration;
  deliveryDelay?: Duration;
  dlq?: Queue;
};

export class CustomQueue extends Construct {
  public readonly dlq: Queue;
  public readonly queue: Queue;

  constructor(scope: Construct, props: BaseServiceProps, params: CustomQueueParams) {
    super(scope, getLogicalName(CustomQueue.name, params.name));

    this.dlq =
      params.dlq ||
      new Queue(this, getLogicalName(params.name, 'DLQ'), {
        queueName: getResourceName(`${params.name}-dlq`, props),
        retentionPeriod: params.dlqRetention || Duration.hours(48),
      });

    this.queue = new Queue(this, getLogicalName(params.name, 'Queue'), {
      queueName: getResourceName(params.name, props),
      visibilityTimeout: params.visibilityTimeout || Duration.seconds(30),
      deliveryDelay: params.deliveryDelay || Duration.seconds(0),
      deadLetterQueue: {
        queue: this.dlq,
        maxReceiveCount: params.maxRetries || 3,
      },
    });
  }
}
