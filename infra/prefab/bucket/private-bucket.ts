import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { BucketProps, Bucket, BucketEncryption, BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { EventType, NotificationKeyFilter } from 'aws-cdk-lib/aws-s3';
import { SnsDestination, SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Queue } from 'aws-cdk-lib/aws-sqs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';

export type PrivateBucketParams = {
  bucketName: string;
  bucketProps?: BucketProps;
};
export class PrivateBucket extends Construct {
  public readonly bucket: Bucket;

  constructor(service: Service, params: PrivateBucketParams) {
    super(service, getLogicalName(PrivateBucket.name, params.bucketName));

    const defaultProps: BucketProps = {
      encryption: BucketEncryption.S3_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: service.props.envName === 'prod' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      autoDeleteObjects: service.props.envName !== 'prod',
      publicReadAccess: false,
      eventBridgeEnabled: true,
    };

    this.bucket = new Bucket(this, getLogicalName(PrivateBucket.name, 'Bucket'), {
      bucketName: getResourceName(params.bucketName, service.props),
      ...defaultProps,
      ...params.bucketProps,
    });
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

  public useMod(variableName = 'BUCKET_NAME', mods: ((bucket: Bucket) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.bucket.bucketName);
      mods.map((fn) => fn(this.bucket));
    };
  }

  public static modifier = {
    reader: (bucket: Bucket): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        bucket.grantRead(lambda);
        return lambda;
      };
    },
    writer: (bucket: Bucket): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        bucket.grantRead(lambda);
        return lambda;
      };
    },
    delete: (bucket: Bucket): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        bucket.grantDelete(lambda);
        return lambda;
      };
    },
  };
}
