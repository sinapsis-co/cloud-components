import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';

import { getResourceName } from '../../common/naming/get-resource-name';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Service } from '../../common/service';

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

  constructor(service: Service, params: CustomQueueParams) {
    super(service, getLogicalName(CustomQueue.name, params.name));

    this.dlq =
      params.dlq ||
      new Queue(this, getLogicalName(params.name, 'DLQ'), {
        queueName: getResourceName(`${params.name}-dlq`, service.props),
        retentionPeriod: params.dlqRetention || Duration.hours(48),
      });

    this.queue = new Queue(this, getLogicalName(params.name, 'Queue'), {
      queueName: getResourceName(params.name, service.props),
      visibilityTimeout: params.visibilityTimeout || Duration.seconds(30),
      deliveryDelay: params.deliveryDelay || Duration.seconds(0),
      deadLetterQueue: {
        queue: this.dlq,
        maxReceiveCount: params.maxRetries || 3,
      },
    });
  }

  public queueWriterModifier(variableName = 'DEST_QUEUE'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.queue.queueUrl);
      this.queue.grantSendMessages(lambda);
    };
  }
}
