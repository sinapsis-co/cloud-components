/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { CfnDatabase } from 'aws-cdk-lib/aws-timestream';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type TimeStreamDBParams = {
  databaseName: string;
};

export class TimestreamDatabase extends Construct {
  public readonly database: CfnDatabase;

  constructor(scope: Construct, props: BaseServiceProps, params: TimeStreamDBParams) {
    super(scope, getLogicalName(TimestreamDatabase.name, params.databaseName));

    this.database = new CfnDatabase(this, 'Database', {
      databaseName: getResourceName(params.databaseName, props),
    });

    this.database.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (props.envName === 'prod') this.database.applyRemovalPolicy(RemovalPolicy.RETAIN);
  }
}
