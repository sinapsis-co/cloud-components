import { Construct } from 'constructs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Queue } from 'aws-cdk-lib/aws-sqs';

import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

export type CustomTopicParams = {
  name: string;
};

export class CustomTopic extends Construct {
  public readonly topic: Topic;

  constructor(service: Service, params: CustomTopicParams) {
    super(service, getLogicalName(CustomTopic.name, params.name));

    this.topic = new Topic(this, params.name, {
      topicName: getResourceName(params.name, service.props),
    });
  }

  public addQueueSubs(queue: Queue): void {
    this.topic.addSubscription(new SqsSubscription(queue));
  }

  public topicWriterModifier(variableName = 'DEST_TOPIC'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.topic.topicArn);
      this.topic.grantPublish(lambda);
    };
  }
  public static smsSenderModifier(): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addToRolePolicy(new PolicyStatement({ effect: Effect.ALLOW, actions: ['sns:Publish'], resources: ['*'] }));
    };
  }
}
