import { Topic } from 'aws-cdk-lib/aws-sns';
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';

export type CustomTopicParams = {
  name: string;
};

export class TopicPrefab extends Construct {
  public readonly topic: Topic;

  constructor(service: Service, params: CustomTopicParams) {
    super(service, getLogicalName(TopicPrefab.name, params.name));

    this.topic = new Topic(this, params.name, {
      topicName: getResourceName(params.name, service.props),
    });
  }

  public addQueueSubs(queue: Queue): void {
    this.topic.addSubscription(new SqsSubscription(queue));
  }

  public useMod(variableName = 'DEST_TOPIC', mods: ((topic: Topic) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.topic.topicArn);
      mods.map((fn) => fn(this.topic)(lambda));
    };
  }

  public useModWriter(variableName = 'DEST_TOPIC'): (lambda: NodejsFunction) => void {
    return this.useMod(variableName, [TopicPrefab.modifier.writer]);
  }

  public static modifier = {
    writer: (topic: Topic): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        topic.grantPublish(lambda);
      };
    },
    smsWriter: (): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.addToRolePolicy(
          new PolicyStatement({ effect: Effect.ALLOW, actions: ['sns:Publish'], resources: ['*'] })
        );
      };
    },
  };
}