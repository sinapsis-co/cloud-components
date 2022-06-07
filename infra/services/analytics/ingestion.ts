import { Construct } from 'constructs';
import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Bucket, BlockPublicAccess, BucketEncryption, StorageClass } from 'aws-cdk-lib/aws-s3';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { CfnDeliveryStream } from 'aws-cdk-lib/aws-kinesisfirehose';
import { IEventBus, Rule } from 'aws-cdk-lib/aws-events';
import { KinesisFirehoseStream } from 'aws-cdk-lib/aws-events-targets';

import { getResourceName, getShortResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type EventIngestionProps = {
  eventBus?: IEventBus;
  eventSource: string;
  lifecycleDurations?: {
    infrequentDays: number;
    glacierDays: number;
  };
  bufferingHints?: {
    intervalInSeconds: number;
    sizeInMBs: number;
  };
};

export class EventIngestion extends Construct {
  public readonly datalakeBucket: Bucket;

  constructor(service: Service, params: EventIngestionProps) {
    super(service, getLogicalName(EventIngestion.name));

    const dataLakeBucket = new Bucket(service, 'DataLakeBucket', {
      bucketName: getResourceName('datalake', service.props),
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.KMS_MANAGED,
      removalPolicy: RemovalPolicy.RETAIN,
      lifecycleRules: [
        {
          transitions: [
            {
              storageClass: StorageClass.INFREQUENT_ACCESS,
              transitionAfter: Duration.days(params.lifecycleDurations?.infrequentDays || 90),
            },
            {
              storageClass: StorageClass.GLACIER,
              transitionAfter: Duration.days(params.lifecycleDurations?.glacierDays || 360),
            },
          ],
        },
      ],
    });

    const role = new Role(service, 'DataLakeDeliveryStringRole', {
      assumedBy: new ServicePrincipal('firehose.amazonaws.com'),
    });

    dataLakeBucket.grantReadWrite(role);

    const lambdaFunction = new NodejsFunction(service, 'ProcessorFunction', {
      functionName: getShortResourceName('processor', service.props),
      entry: `${__dirname}/processor/handler.js`,
      handler: 'handler',
    });

    lambdaFunction.grantInvoke(role);

    const deliveryStream = new CfnDeliveryStream(service, 'DataLakeDeliveryStream', {
      deliveryStreamType: 'DirectPut',
      extendedS3DestinationConfiguration: {
        bucketArn: dataLakeBucket.bucketArn,
        roleArn: role.roleArn,
        compressionFormat: 'UNCOMPRESSED',
        prefix: 'year=!{timestamp:yyyy}/month=!{timestamp:MM}/day=!{timestamp:dd}/hour=!{timestamp:HH}/',
        errorOutputPrefix: 'error/!{firehose:random-string}/!{firehose:error-output-type}/!{timestamp:yyyy/MM/dd}/',
        bufferingHints: {
          intervalInSeconds: params.bufferingHints?.intervalInSeconds || 300,
          sizeInMBs: params.bufferingHints?.sizeInMBs || 5,
        },
        processingConfiguration: {
          enabled: true,
          processors: [
            {
              type: 'Lambda',
              parameters: [
                {
                  parameterName: 'LambdaArn',
                  parameterValue: lambdaFunction.functionArn,
                },
              ],
            },
          ],
        },
      },
    });

    new Rule(service, 'EventProcessorRule', {
      ...(params.eventBus ? { eventBus: params.eventBus } : {}),
      eventPattern: { source: [params.eventSource] },
      targets: [new KinesisFirehoseStream(deliveryStream)],
    });

    this.datalakeBucket = dataLakeBucket;
  }
}
