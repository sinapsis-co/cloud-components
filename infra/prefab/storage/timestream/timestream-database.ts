/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RemovalPolicy } from 'aws-cdk-lib';
import { CfnDatabase } from 'aws-cdk-lib/aws-timestream';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';

export type TimeStreamDBParams = {
  databaseName: string;
};

export class TimestreamDatabasePrefab extends Construct {
  public readonly database: CfnDatabase;

  constructor(service: Service, params: TimeStreamDBParams) {
    super(service, getLogicalName(TimestreamDatabasePrefab.name, params.databaseName));

    this.database = new CfnDatabase(this, 'Database', {
      databaseName: getResourceName(params.databaseName, service.props),
    });

    this.database.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (service.props.envName === 'prod') this.database.applyRemovalPolicy(RemovalPolicy.RETAIN);
  }
}
