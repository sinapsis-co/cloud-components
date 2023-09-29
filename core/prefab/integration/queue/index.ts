import { Duration } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Queue, QueueProps } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

import { EventConfig } from '@sinapsis-co/cc-sdk/catalog/event';
import { Rule } from 'aws-cdk-lib/aws-events';
import { SqsQueue } from 'aws-cdk-lib/aws-events-targets';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName, getShortResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { EventBusPrefab } from '../event-bus';

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
  eventBus?: EventBusPrefab;
  eventConfig?: EventConfig[];
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

    if (params.eventBus && params.eventConfig) {
      const source = params.eventConfig.map((e) => e.source);
      const detailType = params.eventConfig.map((e) => e.name);
      const detailRules = params.eventConfig.reduce((memo, e) => ({ ...memo, ...(e.detail || {}) }), {});

      new Rule(service, getLogicalName('EventProcessorRule', params.name), {
        ruleName: getShortResourceName(params.name, service.props),
        eventBus: params.eventBus?.bus,
        eventPattern: {
          ...(source.filter((e) => !!e).length > 0 ? { source } : {}),
          ...(detailType.filter((e) => !!e).length > 0 ? { detailType } : {}),
          ...(Object.keys(detailRules).length > 0 ? { detail: detailRules } : {}),
        },
        targets: [new SqsQueue(this.queue)],
      });
    }
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
