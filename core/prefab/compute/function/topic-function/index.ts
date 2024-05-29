import { Duration } from 'aws-cdk-lib';
import { SnsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';

import { CustomTopicParams, TopicPrefab } from 'prefab/integration/topic';

import { BaseFunction, BaseAggregateParams, BaseHandlerParams } from '../base-function';

export type TopicHandlerParams = BaseHandlerParams & {
  topic?: TopicPrefab;
  customTopicParams?: CustomTopicParams;
  batchSize?: number;
  batchWindow?: Duration;
};

export type TopicFunctionParams = BaseAggregateParams;

export class TopicFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly customTopic: TopicPrefab;

  constructor(service: Service, params: TopicFunctionParams & TopicHandlerParams) {
    super(service, getLogicalName(TopicFunction.name, params.name));

    this.customTopic = params.topic || new TopicPrefab(service, { name: params.name, ...params.customTopicParams });

    this.lambdaFunction = new BaseFunction(service, {
      ...params,
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'TOPIC' },
    }).lambdaFunction;

    this.lambdaFunction.addEventSource(new SnsEventSource(this.customTopic.topic));
  }
}
