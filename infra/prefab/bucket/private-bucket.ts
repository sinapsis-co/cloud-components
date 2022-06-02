import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { BucketProps, Bucket, BucketEncryption, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { EventType, NotificationKeyFilter } from 'aws-cdk-lib/aws-s3';
import { SnsDestination, SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Queue } from 'aws-cdk-lib/aws-sqs';

import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';

export type PrivateBucketParams = {
  bucketName: string;
  bucketProps?: BucketProps;
};
export class PrivateBucket extends Construct {
  public readonly bucket: Bucket;

  constructor(scope: Construct, props: BaseServiceProps, params: PrivateBucketParams) {
    super(scope, getLogicalName(PrivateBucket.name, params.bucketName));

    const defaultProps: BucketProps = {
      encryption: BucketEncryption.S3_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: props.envName === 'prod' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      autoDeleteObjects: props.envName !== 'prod',
      publicReadAccess: false,
      eventBridgeEnabled: true,
    };

    this.bucket = new Bucket(this, getLogicalName(PrivateBucket.name, 'Bucket'), {
      bucketName: getResourceName(params.bucketName, props),
      ...defaultProps,
      ...params.bucketProps,
    });
  }
  // (x: number): (y: number) => number
  public modifierBucketReader(variableName = 'BUCKET_NAME'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.bucket.bucketName);
      this.bucket.grantRead(lambda);
    };
  }
  public addWriterFunction(lambdaFunction: NodejsFunction, variableName = 'BUCKET_NAME'): void {
    lambdaFunction.addEnvironment(variableName, this.bucket.bucketName);
    this.bucket.grantWrite(lambdaFunction);
  }
  public addDeleteFunction(lambdaFunction: NodejsFunction, variableName = 'BUCKET_NAME'): void {
    lambdaFunction.addEnvironment(variableName, this.bucket.bucketName);
    this.bucket.grantDelete(lambdaFunction);
  }

  public addTopicNotification(params: {
    topic: Topic;
    eventType?: EventType;
    filters?: NotificationKeyFilter[];
  }): void {
    this.bucket.addEventNotification(
      params.eventType || EventType.OBJECT_CREATED,
      new SnsDestination(params.topic),
      ...(params.filters || [])
    );
  }

  public addQueueNotification(params: {
    queue: Queue;
    eventType?: EventType;
    filters?: NotificationKeyFilter[];
  }): void {
    this.bucket.addEventNotification(
      params.eventType || EventType.OBJECT_CREATED,
      new SqsDestination(params.queue),
      ...(params.filters || [])
    );
  }
}
