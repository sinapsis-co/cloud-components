import { TablePermission } from '@sinapsis-co/cc-sdk/catalog/api';
import { parseTableName } from '@sinapsis-co/cc-sdk/integration/store/dynamo/util/parse-name';
import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

export class DynamoTablePrefab extends Construct {
  public readonly table: Table;
  public readonly tableName: string;

  constructor(service: Service, params: typeof TableStoreBuilder) {
    super(service, getLogicalName(DynamoTablePrefab.name, new params().tableName));

    const definition = new params();
    if (!definition.tableName)
      throw new SynthError(
        'Bad implementation of TableStoreBuilder (remember use implements instead of extends in you class)',
        service.props
      );

    this.tableName = definition.tableName;
    this.table = new Table(this, definition.tableName, {
      tableName: getResourceName(definition.tableName, service.props),
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: 'pk', type: AttributeType.STRING },
      timeToLiveAttribute: 'deleteTTL',
      ...(definition.keyMapping.sk ? { sortKey: { name: 'sk', type: AttributeType.STRING } } : {}),
      // stream: params.stream,
    });

    const indexes = Object.keys(definition.indexes || {}) || [];
    indexes.forEach((index) => {
      if (indexes && indexes[index]) {
        this.table.addGlobalSecondaryIndex({
          indexName: index,
          partitionKey: { name: indexes[index].pk, type: AttributeType.STRING },
          ...(indexes[index].sk ? { sortKey: { name: indexes[index]?.sk, type: AttributeType.STRING } } : {}),
        });
      }
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
      DynamoTablePrefab.modifier.permission(this.table, tablePermission)(lambda);
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
    tablePrefab?: DynamoTablePrefab,
    tablePermission?: TablePermission
  ): void {
    if (tablePrefab instanceof DynamoTablePrefab) {
      if (!tablePermission) throw new Error('tablePermission is required when table is used');
      lambdaFunction.addEnvironment(parseTableName(tablePrefab.tableName), tablePrefab.table.tableName);
      if (tablePermission === 'none') return;
      const permissionMapper = {
        read: () => tablePrefab.table.grantReadData(lambdaFunction),
        write: () => tablePrefab.table.grantWriteData(lambdaFunction),
        readWrite: () => tablePrefab.table.grantReadWriteData(lambdaFunction),
      };
      permissionMapper[tablePermission]();
    }
  }
}
