import { BaseDataSource, GraphqlApi } from 'aws-cdk-lib/aws-appsync';
import { EventBusPrefab } from 'prefab/integration/event-bus';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';

export type EventBridgeDataSourceParams = {
  api: GraphqlApi;
  eventBusPrefab: EventBusPrefab;
};

export type ServiceResolver = {
  baseApiFolder: string;
  api: GraphqlApi;
  tablePrefab: DynamoTablePrefab;
  resolvers: {
    fieldName: string;
    typeName: 'Mutation' | 'Query' | 'Subscription';
    resolversPipeline?: { name: string; dataSource?: BaseDataSource }[];
  }[];
};

export type FunctionResolver = {
  name: string;
  baseApiFolder: string;
  api: GraphqlApi;
  dataSource: BaseDataSource;
};
