import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { SnsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { CustomTopic, CustomTopicParams } from '../../topic/custom-topic';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type TopicHandlerParams = BaseHandlerParams & {
  topic?: CustomTopic;
  customTopicParams?: CustomTopicParams;
  batchSize?: number;
  batchWindow?: Duration;
};

export type TopicFunctionParams = BaseFunctionParams;

export class TopicFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly customTopic: CustomTopic;

  constructor(service: Service, params: TopicFunctionParams & TopicHandlerParams) {
    super(service, getLogicalName(TopicFunction.name, params.name));

    this.customTopic = params.topic || new CustomTopic(service, { name: params.name, ...params.customTopicParams });

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    this.lambdaFunction.addEventSource(new SnsEventSource(this.customTopic.topic));
  }
}
