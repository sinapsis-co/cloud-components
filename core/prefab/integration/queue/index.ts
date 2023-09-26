import { Duration } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Queue, QueueProps } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

export type FifoProperties = Pick<
  QueueProps,
  'contentBasedDeduplication' | 'deduplicationScope' | 'fifoThroughputLimit'
>;

export type QueuePrefabParams = {
  name: string;
  maxRetries?: number;
  dlqRetention?: Duration;
  visibilityTimeout?: Duration;
  deliveryDelay?: Duration;
  dlq?: Queue;
  fifo?: FifoProperties;
};

export class QueuePrefab extends Construct {
  public readonly dlq: Queue;
  public readonly queue: Queue;

  constructor(service: Service, params: QueuePrefabParams) {
    super(service, getLogicalName(QueuePrefab.name, params.name));

    const queueName = getResourceName(params.name, service.props);

    this.dlq =
      params.dlq ||
      new Queue(this, getLogicalName(params.name, 'DLQ'), {
        queueName: params.fifo ? `${queueName}-dlq.fifo` : `${queueName}-dlq`,
        retentionPeriod: params.dlqRetention || Duration.hours(48),
        ...(params.fifo ? { fifo: true } : {}),
      });

    this.queue = new Queue(this, getLogicalName(params.name, 'Queue'), {
      queueName: params.fifo ? `${queueName}.fifo` : queueName,
      visibilityTimeout: params.visibilityTimeout || Duration.seconds(30),
      deliveryDelay: params.deliveryDelay || Duration.seconds(0),
      ...(params.fifo ? { fifo: true, ...params.fifo } : {}),
      deadLetterQueue: {
        queue: this.dlq,
        maxReceiveCount: params.maxRetries || 3,
      },
    });
  }

  public useMod(variableName = 'DEST_QUEUE', mods: ((queue: Queue) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.queue.queueUrl);
      mods.map((fn) => fn(this.queue)(lambda));
    };
  }

  public useModWriter(variableName = 'DEST_QUEUE'): (lambda: NodejsFunction) => void {
    return this.useMod(variableName, [QueuePrefab.modifier.writer]);
  }

  public static modifier = {
    writer: (queue: Queue): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        queue.grantSendMessages(lambda);
        return lambda;
      };
    },
  };
}
