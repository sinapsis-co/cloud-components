import { RemovalPolicy } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as awsS3 from 'aws-cdk-lib/aws-s3';
import { BucketProps } from 'aws-cdk-lib/aws-s3';
import { SnsDestination, SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

import { Modifier } from '@sinapsis-cloud-components/core/common/modifier';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getBucketName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

export type PrivateBucketParams = {
  bucketName: string;
  bucketProps?: Omit<BucketProps, 'bucketName'>;
};

export type BucketNotFilter = awsS3.NotificationKeyFilter[];

export class PrivateBucketPrefab extends Construct {
  public readonly bucket: awsS3.Bucket;

  constructor(service: Service, params: PrivateBucketParams) {
    super(service, getLogicalName(PrivateBucketPrefab.name, params.bucketName));

    const defaultProps: BucketProps = {
      encryption: awsS3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: awsS3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: service.props.envName === 'prod' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      autoDeleteObjects: service.props.envName !== 'prod',
      publicReadAccess: false,
    };

    this.bucket = new awsS3.Bucket(this, getLogicalName(PrivateBucketPrefab.name, 'Bucket'), {
      bucketName: getBucketName(params.bucketName, service.props),
      ...defaultProps,
      ...params.bucketProps,
    });
  }

  public addTopicNotification(params: { topic: Topic; eventType?: awsS3.EventType; filters?: BucketNotFilter }): void {
    this.bucket.addEventNotification(
      params.eventType || awsS3.EventType.OBJECT_CREATED,
      new SnsDestination(params.topic),
      ...(params.filters || [])
    );
  }

  public addQueueNotification(params: { queue: Queue; eventType?: awsS3.EventType; filters?: BucketNotFilter }): void {
    this.bucket.addEventNotification(
      params.eventType || awsS3.EventType.OBJECT_CREATED,
      new SqsDestination(params.queue),
      ...(params.filters || [])
    );
  }

  // Mods
  public useMod(variableName = 'BUCKET_NAME', mods: ((bucket: awsS3.Bucket) => any)[]): Modifier {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.bucket.bucketName);
      mods.map((fn) => fn(this.bucket)(lambda));
    };
  }

  // Class Mods
  public static modifier = {
    reader: (bucket: awsS3.Bucket): Modifier => {
      return (lambda) => {
        bucket.grantRead(lambda);
      };
    },
    writer: (bucket: awsS3.Bucket): Modifier => {
      return (lambda) => {
        bucket.grantWrite(lambda);
      };
    },
    delete: (bucket: awsS3.Bucket): Modifier => {
      return (lambda) => {
        bucket.grantDelete(lambda);
      };
    },
  };
}
