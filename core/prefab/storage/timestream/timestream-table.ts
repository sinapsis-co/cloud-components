/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RemovalPolicy } from 'aws-cdk-lib';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { CfnDatabase, CfnTable } from 'aws-cdk-lib/aws-timestream';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

export type TimestreamTableParams = {
  tableName: string;
  database: CfnDatabase;
  memoryHoursRetention?: string;
  diskDaysRetention?: string;
};

export class TimestreamTablePrefab extends Construct {
  public readonly table: CfnTable;
  public readonly database: CfnDatabase;

  constructor(service: Service, params: TimestreamTableParams) {
    super(service, getLogicalName(TimestreamTablePrefab.name, params.tableName));

    this.database = params.database;

    this.table = new CfnTable(this, getLogicalName('TimestreamTable', params.tableName), {
      tableName: getResourceName(params.tableName, service.props),
      databaseName: params.database.databaseName!,
      magneticStoreWriteProperties: {
        enableMagneticStoreWrites: true,
      },
      retentionProperties: {
        MemoryStoreRetentionPeriodInHours: params.memoryHoursRetention || '24',
        MagneticStoreRetentionPeriodInDays: params.diskDaysRetention || '365',
      },
    });

    this.table.addDependency(this.database);
    this.table.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (service.props.envName === 'prod') this.table.applyRemovalPolicy(RemovalPolicy.RETAIN);
  }

  public useMod(mods: ((table: CfnTable) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment('TIMESTREAM_TABLE', this.table.tableName!);
      lambda.addEnvironment('TIMESTREAM_DB', this.database.databaseName!);
      mods.map((fn) => fn(this.table)(lambda));
    };
  }

  public static modifier = {
    writer: (table: CfnTable): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.addToRolePolicy(
          new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ['timestream:WriteRecords'],
            resources: [table.attrArn],
          })
        );
        lambda.addToRolePolicy(
          new PolicyStatement({ effect: Effect.ALLOW, actions: ['timestream:DescribeEndpoints'], resources: ['*'] })
        );
      };
    },
    reader: (table: CfnTable): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.addToRolePolicy(
          new PolicyStatement({
            effect: Effect.ALLOW,
            actions: ['timestream:Select', 'timestream:SelectValues'],
            resources: [table.attrArn],
          })
        );
        lambda.addToRolePolicy(
          new PolicyStatement({ effect: Effect.ALLOW, actions: ['timestream:DescribeEndpoints'], resources: ['*'] })
        );
      };
    },
  };
}
