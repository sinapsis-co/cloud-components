import { Construct } from 'constructs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { Queue } from 'aws-cdk-lib/aws-sqs';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export type CustomTopicParams = {
  name: string;
};

export class CustomTopic extends Construct {
  public readonly topic: Topic;

  constructor(scope: Construct, props: BaseServiceProps, params: CustomTopicParams) {
    super(scope, getLogicalName(CustomTopic.name, params.name));

    this.topic = new Topic(this, params.name, {
      topicName: getResourceName(params.name, props),
    });
  }
  public addQueueSubs(queue: Queue): void {
    this.topic.addSubscription(new SqsSubscription(queue));
  }
  public addWriterFunction(lambdaFunction: NodejsFunction, envName = 'DEST_TOPIC'): void {
    lambdaFunction.addEnvironment(envName, this.topic.topicArn);
    this.topic.grantPublish(lambdaFunction);
  }
}
