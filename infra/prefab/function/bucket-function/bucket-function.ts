import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { S3EventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { Bucket, EventType, NotificationKeyFilter } from 'aws-cdk-lib/aws-s3';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type BucketHandlerProps = BaseHandlerParams;

export type BucketFunctionProps = BaseFunctionParams & {
  bucket: Bucket;
  eventTypes?: EventType[];
  eventFilters?: NotificationKeyFilter[];
};

export class BucketFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: BucketFunctionProps & BucketHandlerProps) {
    super(scope, getLogicalName(BucketFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(this, props, params).lambdaFunction;

    const s3PutEventSource = new S3EventSource(params.bucket, {
      events: params.eventTypes || [EventType.OBJECT_CREATED_PUT],
      filters: params.eventFilters,
    });

    this.lambdaFunction.addEventSource(s3PutEventSource);
  }
}
