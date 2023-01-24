import { Construct } from 'constructs';
import { CfnOutput, Duration, RemovalPolicy } from 'aws-cdk-lib';

import { getDatabaseName, getResourceName } from '../../common/naming/get-resource-name';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { Service } from '../../common/service';
import { getDeployConfig } from '../../common/naming/get-deploy-config';

import { CfnCrawler, CfnDatabase, CfnCrawlerProps } from 'aws-cdk-lib/aws-glue';
import { BlockPublicAccess, Bucket, BucketEncryption, StorageClass } from 'aws-cdk-lib/aws-s3';
import { Rule } from 'aws-cdk-lib/aws-events';
import { Effect, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnDeliveryStream } from 'aws-cdk-lib/aws-kinesisfirehose';
import { KinesisFirehoseStream } from 'aws-cdk-lib/aws-events-targets';
import { CustomEventBusParams } from '../../services/custom-event-bus';
import { BaseFunction } from '../function/base-function';
import { CfnWorkGroup } from 'aws-cdk-lib/aws-athena';

export type EventsAnalyticsParams = {
  eventBus: CustomEventBusParams;
  eventSource?: string;
  paramsCrawlerProps?: Partial<CfnCrawlerProps>;
  lifecycleDurations?: {
    infrequentDays: number;
    glacierDays: number;
  };
  bufferingHints?: {
    intervalInSeconds: number;
    sizeInMBs: number;
  };
};

export class EventsAnalyticsPrefab extends Construct {
  public readonly datalakeBucket: Bucket;
  public readonly database: CfnDatabase;
  public readonly crawler: CfnCrawler;
  public readonly athenaOutputBucket: Bucket;
  public readonly workGroup: CfnWorkGroup;

  constructor(service: Service, params: EventsAnalyticsParams) {
    super(service, getLogicalName(EventsAnalyticsPrefab.name));

    this.datalakeBucket = new Bucket(service, 'DataLakeBucket', {
      bucketName: getResourceName('datalake', service.props),
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.KMS_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
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
    if (service.props.envName === 'prod') this.datalakeBucket.applyRemovalPolicy(RemovalPolicy.RETAIN);

    const role = new Role(service, getLogicalName('DataLakeDeliveryStringRole'), {
      assumedBy: new ServicePrincipal('firehose.amazonaws.com'),
    });

    const lambdaFunction = new BaseFunction(service, {
      name: 'ingestion-transform',
      baseFunctionFolder: __dirname,
      ...(service.props.isDemoProject ? {} : { compiled: true }),
    }).lambdaFunction;

    const deliveryStream = new CfnDeliveryStream(service, 'DataLakeDeliveryStream', {
      deliveryStreamType: 'DirectPut',
      extendedS3DestinationConfiguration: {
        bucketArn: this.datalakeBucket.bucketArn,
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
              parameters: [{ parameterName: 'LambdaArn', parameterValue: lambdaFunction.functionArn }],
            },
          ],
        },
      },
    });

    new Rule(service, 'EventProcessorRule', {
      ...(params.eventBus ? { eventBus: params.eventBus } : {}),
      eventPattern: { source: [params.eventSource || 'app'] },
      targets: [new KinesisFirehoseStream(deliveryStream)],
    });

    this.datalakeBucket.grantReadWrite(role);
    lambdaFunction.grantInvoke(role);

    this.database = new CfnDatabase(service, 'Database', {
      catalogId: getDeployConfig(service.props).env.account,
      databaseInput: { name: getDatabaseName('datalake', service.props) },
    });

    const crawlerRole = new Role(service, 'CrawlerRole', { assumedBy: new ServicePrincipal('glue.amazonaws.com') });

    crawlerRole.addToPrincipalPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'glue:*',
          's3:GetBucketLocation',
          's3:ListBucket',
          's3:ListAllMyBuckets',
          'iam:ListRolePolicies',
          'iam:GetRole',
          'iam:GetRolePolicy',
          'cloudwatch:PutMetricData',
          'logs:PutLogEvents',
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
        ],
        resources: ['*'],
      })
    );

    this.datalakeBucket.grantReadWrite(crawlerRole);

    this.crawler = new CfnCrawler(this, 'DatalakeTableCrawler', {
      name: getResourceName('crawler', service.props),
      databaseName: this.database.ref.toString(),
      role: crawlerRole.roleArn,
      targets: { s3Targets: [{ path: this.datalakeBucket.bucketName }] },
      configuration: JSON.stringify({
        Version: 1.0,
        Grouping: { TableGroupingPolicy: 'CombineCompatibleSchemas' },
        CrawlerOutput: {
          Tables: { AddOrUpdateBehavior: 'MergeNewColumns' },
          Partitions: { AddOrUpdateBehavior: 'InheritFromTable' },
        },
      }),
      schemaChangePolicy: {
        deleteBehavior: 'DELETE_FROM_DATABASE',
        updateBehavior: 'UPDATE_IN_DATABASE',
      },
      ...params.paramsCrawlerProps,
    });

    new CfnOutput(service, 'CrawlerName', {
      exportName: getResourceName('CrawlerName', service.props),
      value: this.crawler.name as string,
    });
    new CfnOutput(service, 'DatabaseName', {
      exportName: getResourceName('DatabaseName', service.props),
      value: this.database.ref.toString(),
    });
    new CfnOutput(service, 'TableName', {
      exportName: getResourceName('TableName', service.props),
      value: getDatabaseName('datalake', service.props),
    });

    this.athenaOutputBucket = new Bucket(service, 'QueryOutputsBucket', {
      bucketName: getResourceName('query-outputs', service.props),
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.KMS_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    this.workGroup = new CfnWorkGroup(service, 'DataLakeWorkGroup', {
      name: getResourceName('datalake', service.props),
      recursiveDeleteOption: true,
      workGroupConfiguration: {
        resultConfiguration: {
          outputLocation: this.athenaOutputBucket.s3UrlForObject(),
        },
      },
    });
    this.workGroup.applyRemovalPolicy(RemovalPolicy.DESTROY);
  }
}
