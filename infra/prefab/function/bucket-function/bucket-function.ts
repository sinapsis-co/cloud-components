import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { S3EventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Bucket, EventType, NotificationKeyFilter } from 'aws-cdk-lib/aws-s3';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';
import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';

export type BucketHandlerProps = NodejsFunctionProps & {
  name: string;
  environment?: Record<string, string>;
  tablePermission?: TablePermission;
  modifiers?: ((lambda: NodejsFunction) => any)[];
};

export type BucketFunctionProps = BucketHandlerProps & {
  bucket: Bucket;
  baseFunctionFolder: string;
  eventTypes?: EventType[];
  eventFilters?: NotificationKeyFilter[];
  eventBus?: CustomEventBusParams;
  table?: Table;
  compiled?: true;
};

export class BucketFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: BucketFunctionProps) {
    super(scope, getLogicalName(BucketFunction.name));

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_14_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      environment: params.environment || {},
      ...params,
    });

    params.modifiers?.map((fn) => fn(this.lambdaFunction));

    const s3PutEventSource = new S3EventSource(params.bucket, {
      events: params.eventTypes || [EventType.OBJECT_CREATED_PUT],
      filters: params.eventFilters,
    });

    this.lambdaFunction.addEventSource(s3PutEventSource);

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
