import { Construct } from 'constructs';
import { CfnOutput } from 'aws-cdk-lib';
import { CfnDatabase, CfnCrawler } from 'aws-cdk-lib/aws-glue';
import { Role, ServicePrincipal, PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { Bucket } from 'aws-cdk-lib/aws-s3';

import { Service } from '../../common/service';
import { getDatabaseName, getResourceName } from '../../common/naming/get-resource-name';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getDeployConfig } from '../../common/naming/get-deploy-config';

export type AutoETLProps = { dataLakeBucket: Bucket };

export class AutoETL extends Construct {
  public readonly database: CfnDatabase;

  constructor(service: Service, params: AutoETLProps) {
    super(service, getLogicalName(AutoETL.name));

    this.database = new CfnDatabase(service, 'Database', {
      catalogId: getDeployConfig(service.props).env.account,
      databaseInput: { name: getDatabaseName('datalake', service.props) },
    });

    const role = new Role(service, 'CrawlerRole', { assumedBy: new ServicePrincipal('glue.amazonaws.com') });

    role.addToPrincipalPolicy(
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

    params.dataLakeBucket.grantReadWrite(role);

    const crawler = new CfnCrawler(this, 'DatalakeTableCrawler', {
      name: getResourceName('crawler', service.props),
      databaseName: this.database.ref.toString(),
      role: role.roleArn,
      targets: { s3Targets: [{ path: params.dataLakeBucket.bucketName }] },
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
    });

    new CfnOutput(service, 'CrawlerName', { exportName: 'CrawlerName', value: crawler.name as string });
    new CfnOutput(service, 'DatabaseName', { exportName: 'DatabaseName', value: this.database.ref.toString() });
    new CfnOutput(service, 'TableName', {
      exportName: 'TableName',
      value: getDatabaseName('datalake', service.props),
    });
  }
}
