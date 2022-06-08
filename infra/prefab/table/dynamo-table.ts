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
    super(service, getLogicalName(ServiceTable.name, params.tableName));

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

  public useMod(variableName = 'TABLE', mods: ((table: Table) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.table.tableName);
      mods.map((fn) => fn(this.table)(lambda));
    };
  }

  public useModPermission(variableName = 'TABLE', tablePermission: TablePermission): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.table.tableName);
      ServiceTable.modifier.permission(this.table, tablePermission)(lambda);
    };
  }

  public static modifier = {
    permission: (table: Table, tablePermission: TablePermission): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        if (tablePermission === 'none') return;
        const permissionMapper = {
          read: () => table.grantReadData(lambda),
          write: () => table.grantWriteData(lambda),
          readWrite: () => table.grantReadWriteData(lambda),
        };
        permissionMapper[tablePermission]();
      };
    },
    writer: (table: Table): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        table.grantWriteData(lambda);
      };
    },
    reader: (table: Table): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        table.grantReadData(lambda);
      };
    },
  };

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
