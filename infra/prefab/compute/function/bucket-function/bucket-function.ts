import { S3EventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket, EventType, NotificationKeyFilter } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { Service } from '../../../../common/service';
import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type BucketHandlerProps = BaseHandlerParams;

export type BucketFunctionProps = BaseFunctionParams & {
  bucket: Bucket;
  eventTypes?: EventType[];
  eventFilters?: NotificationKeyFilter[];
};

export class BucketFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: BucketFunctionProps & BucketHandlerProps) {
    super(service, getLogicalName(BucketFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    const s3PutEventSource = new S3EventSource(params.bucket, {
      events: params.eventTypes || [EventType.OBJECT_CREATED_PUT],
      filters: params.eventFilters,
    });

    this.lambdaFunction.addEventSource(s3PutEventSource);
  }
}
