import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';
import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api/api-config';
import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event/event-interface';

export type EventHandlerProps = NodejsFunctionProps & {
  name: string;
  eventConfig: EventConfig[];
  environment?: Record<string, string>;
  tablePermission?: TablePermission;
};

export type EventFunctionProps = EventHandlerProps & {
  baseFunctionFolder: string;
  eventBus: CustomEventBusParams;
  environment?: Record<string, string>;
  table?: Table;
  compiled?: true;
};

export class EventFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: EventFunctionProps) {
    super(scope, getLogicalName(EventFunction.name, params.name));

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_14_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      environment: params.environment || {},
      ...params,
    });

    const source = params.eventConfig.map((e) => e.source);
    const detailType = params.eventConfig.map((e) => e.name);
    const detailRules = params.eventConfig.reduce((memo, e) => ({ ...memo, ...(e.detail || {}) }), {});

    new Rule(scope, 'EventProcessorRule', {
      eventBus: params.eventBus,
      eventPattern: {
        ...(source.filter((e) => !!e).length > 0 ? { source } : {}),
        ...(detailType.filter((e) => !!e).length > 0 ? { detailType } : {}),
        ...(Object.keys(detailRules).length > 0 ? { detail: detailRules } : {}),
      },
      targets: [new LambdaFunction(this.lambdaFunction)],
    });

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
