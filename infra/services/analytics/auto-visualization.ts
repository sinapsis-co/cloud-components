import { Construct } from 'constructs';
import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { CfnDatabase } from 'aws-cdk-lib/aws-glue';
import { Role } from 'aws-cdk-lib/aws-iam';
import { CfnDataSource, CfnDataSet } from 'aws-cdk-lib/aws-quicksight';
import { BlockPublicAccess, Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { CfnWorkGroup, CfnNamedQuery } from 'aws-cdk-lib/aws-athena';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type AutoVisualizationProps = {
  dataLakeBucket: Bucket;
  dataLakeDatabase: CfnDatabase;
  dataLakeTableName: string;
  quicksightUser: string;
  dataSetQueryName: string;
  accountId: string;
  queries: (db: string, table: string) => Record<string, { query: string; cols?: { name: string; type: string }[] }>;
};

export class AutoVisualization extends Construct {
  public readonly database: CfnDatabase;

  constructor(scope: Construct, props: BaseServiceProps, params: AutoVisualizationProps) {
    super(scope, getLogicalName(AutoVisualization.name));

    const quicksightUserARN = `arn:aws:quicksight:${props.regionName}:${params.accountId}:user/default/${params.quicksightUser}`;

    const bucket = new Bucket(scope, 'QueryOutputsBucket', {
      bucketName: getResourceName('query-outputs', props),
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.KMS_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const quicksightRole = Role.fromRoleArn(
      scope,
      'QuicksightRole',
      `arn:aws:iam::${params.accountId}:role/service-role/aws-quicksight-s3-consumers-role-v0`
    );

    bucket.grantReadWrite(quicksightRole);
    params.dataLakeBucket.grantRead(quicksightRole);

    const workGroup = new CfnWorkGroup(scope, 'DataLakeWorkGroup', {
      name: 'data-lake',
      recursiveDeleteOption: true,
      workGroupConfiguration: {
        resultConfiguration: {
          outputLocation: bucket.s3UrlForObject(),
        },
      },
    });
    workGroup.applyRemovalPolicy(RemovalPolicy.DESTROY);

    const queries = params.queries(params.dataLakeDatabase.ref.toString(), params.dataLakeTableName);

    Object.keys(queries).map((queryKey) => {
      const query = new CfnNamedQuery(scope, queryKey, {
        database: params.dataLakeDatabase.ref.toString(),
        workGroup: workGroup.name,
        name: queryKey,
        queryString: queries[queryKey].query,
      });
      query.applyRemovalPolicy(RemovalPolicy.DESTROY);
      query.addDependsOn(workGroup);
    });

    const dataSource = new CfnDataSource(scope, 'DataSource', {
      awsAccountId: params.accountId,
      name: 'DataLakeDataSource',
      dataSourceId: `DataLakeDataSource${scope.node.addr}`,
      type: 'ATHENA',
      permissions: [
        {
          principal: quicksightUserARN,
          actions: [
            'quicksight:DescribeDataSource',
            'quicksight:DescribeDataSourcePermissions',
            'quicksight:PassDataSource',
            'quicksight:UpdateDataSource',
            'quicksight:DeleteDataSource',
            'quicksight:UpdateDataSourcePermissions',
          ],
        },
      ],
      alternateDataSourceParameters: [
        {
          athenaParameters: {
            workGroup: workGroup.name,
          },
        },
      ],
      dataSourceParameters: {
        athenaParameters: {
          workGroup: workGroup.name,
        },
      },
    });
    dataSource.addDependsOn(workGroup);

    const sourceQueryName = params.dataSetQueryName;
    const physicalId = `${sourceQueryName}${scope.node.addr}`;

    const dataSet = new CfnDataSet(scope, 'DataSet', {
      name: getResourceName('DataLakeDataSet', props),
      dataSetId: `DataLakeDataSet${scope.node.addr}`,
      awsAccountId: params.accountId,
      importMode: 'DIRECT_QUERY',
      permissions: [
        {
          principal: quicksightUserARN,
          actions: [
            'quicksight:DescribeDataSet',
            'quicksight:DescribeDataSetPermissions',
            'quicksight:PassDataSet',
            'quicksight:DescribeIngestion',
            'quicksight:ListIngestions',
          ],
        },
      ],
      logicalTableMap: {
        [physicalId]: {
          source: { physicalTableId: physicalId },
          alias: sourceQueryName,
          dataTransforms: [
            { projectOperation: { projectedColumns: queries[sourceQueryName].cols?.map((c) => c.name) as string[] } },
          ],
        },
      },
      physicalTableMap: {
        [physicalId]: {
          customSql: {
            name: physicalId,
            dataSourceArn: dataSource.attrArn,
            sqlQuery: queries[sourceQueryName].query,
            columns: queries[sourceQueryName].cols as { name: string; type: string }[],
          },
        },
      },
    });
    dataSet.addDependsOn(workGroup);

    new CfnOutput(scope, 'DataSetARN', {
      exportName: 'DataSetARN',
      value: dataSet.attrArn,
    });

    new CfnOutput(scope, 'QuicksightUserARN', {
      exportName: 'QuicksightUserARN',
      value: quicksightUserARN,
    });
  }
}
