import { Construct } from 'constructs';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Table, AttributeType, BillingMode, StreamViewType } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { getResourceName } from '../../common/naming/get-resource-name';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { Service } from '../../common/service';

export type ServiceTableParams = {
  tableName: string;
  withoutSortKey?: true;
  timeToLiveAttribute?: string;
  stream?: StreamViewType;
};

export class ServiceTable extends Construct {
  public readonly table: Table;

  constructor(service: Service, params: ServiceTableParams) {
    super(service.scope, getLogicalName(ServiceTable.name, params.tableName));

    this.table = new Table(this, params.tableName, {
      tableName: getResourceName(params.tableName, service.props),
      partitionKey: { name: 'pk', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      timeToLiveAttribute: params.timeToLiveAttribute || 'deleteTTL',
      ...(params.withoutSortKey ? {} : { sortKey: { name: 'sk', type: AttributeType.STRING } }),
      stream: params.stream,
    });

    this.table.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (service.props.envName === 'prod') this.table.applyRemovalPolicy(RemovalPolicy.RETAIN);
  }

  public readerModifier(variableName = 'TABLE'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.table.tableName);
      this.table.grantReadData(lambda);
    };
  }
  public writerModifier(variableName = 'TABLE'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.table.tableName);
      this.table.grantWriteData(lambda);
    };
  }
  public tableModifier(tablePermission: TablePermission, variableName = 'TABLE'): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.table.tableName);
      if (tablePermission === 'none') return;
      const permissionMapper = {
        read: () => this.table.grantReadData(lambda),
        write: () => this.table.grantWriteData(lambda),
        readWrite: () => this.table.grantReadWriteData(lambda),
      };
      permissionMapper[tablePermission]();
    };
  }

  public static addTable(
    lambdaFunction: NodejsFunction,
    table?: Table,
    tablePermission?: TablePermission,
    envName = 'TABLE'
  ): void {
    if (table instanceof Table) {
      if (!tablePermission) throw new Error('tablePermission is required when table is used');
      lambdaFunction.addEnvironment(envName, table.tableName);
      if (tablePermission === 'none') return;
      const permissionMapper = {
        read: () => table.grantReadData(lambdaFunction),
        write: () => table.grantWriteData(lambdaFunction),
        readWrite: () => table.grantReadWriteData(lambdaFunction),
      };
      permissionMapper[tablePermission]();
    }
  }
}
