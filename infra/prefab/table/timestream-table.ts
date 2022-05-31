/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Construct } from 'constructs';
import { CfnDatabase, CfnTable } from 'aws-cdk-lib/aws-timestream';
import { RemovalPolicy } from 'aws-cdk-lib';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export type TimestreamTableParams = {
  tableName: string;
  database: CfnDatabase;
  memoryHoursRetention?: string;
  diskDaysRetention?: string;
};

export class TimestreamTable extends Construct {
  public readonly table: CfnTable;
  public readonly database: CfnDatabase;

  constructor(scope: Construct, props: BaseServiceProps, params: TimestreamTableParams) {
    super(scope, getLogicalName(TimestreamTable.name));

    this.database = params.database;

    this.table = new CfnTable(this, 'Table', {
      ...props,
      tableName: getResourceName(params.tableName, props),
      databaseName: params.database.databaseName!,
      magneticStoreWriteProperties: {
        enableMagneticStoreWrites: true,
      },
      retentionProperties: {
        MemoryStoreRetentionPeriodInHours: params.memoryHoursRetention || '24',
        MagneticStoreRetentionPeriodInDays: params.diskDaysRetention || '365',
      },
    });

    this.table.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (props.envName === 'prod') this.table.applyRemovalPolicy(RemovalPolicy.RETAIN);
  }

  addWriterFunction(lambdaFunction: NodejsFunction): void {
    lambdaFunction.addEnvironment('TIMESTREAM_TABLE', this.table.tableName!);
    lambdaFunction.addEnvironment('TIMESTREAM_DB', this.database.databaseName!);
    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['timestream:WriteRecords'],
        resources: [this.table.attrArn],
      })
    );
    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['timestream:DescribeEndpoints'],
        resources: ['*'],
      })
    );
  }
  addReaderFunction(lambdaFunction: NodejsFunction): void {
    lambdaFunction.addEnvironment('TIMESTREAM_TABLE', this.table.tableName!);
    lambdaFunction.addEnvironment('TIMESTREAM_DB', this.database.databaseName!);
    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['timestream:Select', 'timestream:SelectValues'],
        resources: [this.table.attrArn],
      })
    );
    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['timestream:DescribeEndpoints'],
        resources: ['*'],
      })
    );
  }
}
