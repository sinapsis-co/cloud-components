/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { CfnDatabase } from 'aws-cdk-lib/aws-timestream';

import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type TimeStreamDBParams = {
  databaseName: string;
};

export class TimestreamDatabase extends Construct {
  public readonly database: CfnDatabase;

  constructor(service: Service, params: TimeStreamDBParams) {
    super(service.scope, getLogicalName(TimestreamDatabase.name, params.databaseName));

    this.database = new CfnDatabase(this, 'Database', {
      databaseName: getResourceName(params.databaseName, service.props),
    });

    this.database.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (service.props.envName === 'prod') this.database.applyRemovalPolicy(RemovalPolicy.RETAIN);
  }
}
