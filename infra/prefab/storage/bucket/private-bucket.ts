import { RemovalPolicy } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as awsS3 from 'aws-cdk-lib/aws-s3';
import { SnsDestination, SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getBucketName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';

export type PrivateBucketParams = {
  bucketName: string;
  bucketProps?: awsS3.BucketProps;
};
export class PrivateBucketPrefab extends Construct {
  public readonly bucket: awsS3.Bucket;

  constructor(service: Service, params: PrivateBucketParams) {
    super(service, getLogicalName(PrivateBucketPrefab.name, params.bucketName));

    const defaultProps: awsS3.BucketProps = {
      encryption: awsS3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: awsS3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: service.props.envName === 'prod' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      autoDeleteObjects: service.props.envName !== 'prod',
      publicReadAccess: false,
      eventBridgeEnabled: true,
    };

    this.bucket = new awsS3.Bucket(this, getLogicalName(PrivateBucketPrefab.name, 'Bucket'), {
      bucketName: getBucketName(params.bucketName, service.props),
      ...defaultProps,
      ...params.bucketProps,
    });
  }

  public addTopicNotification(params: {
    topic: Topic;
    eventType?: awsS3.EventType;
    filters?: awsS3.NotificationKeyFilter[];
  }): void {
    this.bucket.addEventNotification(
      params.eventType || awsS3.EventType.OBJECT_CREATED,
      new SnsDestination(params.topic),
      ...(params.filters || [])
    );
  }

  public addQueueNotification(params: {
    queue: Queue;
    eventType?: awsS3.EventType;
    filters?: awsS3.NotificationKeyFilter[];
  }): void {
    this.bucket.addEventNotification(
      params.eventType || awsS3.EventType.OBJECT_CREATED,
      new SqsDestination(params.queue),
      ...(params.filters || [])
    );
  }

  public useMod(
    variableName = 'BUCKET_NAME',
    mods: ((bucket: awsS3.Bucket) => any)[]
  ): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.bucket.bucketName);
      mods.map((fn) => fn(this.bucket)(lambda));
    };
  }

  public static modifier = {
    reader: (bucket: awsS3.Bucket): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        bucket.grantRead(lambda);
        return lambda;
      };
    },
    writer: (bucket: awsS3.Bucket): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        bucket.grantWrite(lambda);
        return lambda;
      };
    },
    delete: (bucket: awsS3.Bucket): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        bucket.grantDelete(lambda);
        return lambda;
      };
    },
  };
}
