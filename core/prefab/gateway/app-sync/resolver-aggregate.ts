import * as appsync from 'aws-cdk-lib/aws-appsync';
import { BaseDataSource } from 'aws-cdk-lib/aws-appsync';
import { Construct } from 'constructs';
import * as esbuild from 'esbuild';

import { getLogicalName } from 'common/naming/get-logical-name';
import { capFirstLetter, toDashCase } from 'common/naming/string-parser';
import { Service } from 'common/service';
import { readFileSync, writeFileSync } from 'fs';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';
import { AppSyncPrefab } from '.';
import { FunctionResolver } from './types';

type Resolver = {
  typeName: 'Mutation' | 'Query' | 'Subscription';
  resolversPipeline?: { name: string; dataSource?: BaseDataSource }[];
  env?: Record<string, string>;
};

export type AppSyncResolverAggregateParams<T> = {
  appSyncPrefab: AppSyncPrefab;
  baseApiFolder: string;
  tablePrefab: DynamoTablePrefab;
  resolvers: Record<MethodNames<T>, Resolver>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MethodNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];

export class AppSyncResolverAggregate<T> extends Construct {
  public readonly api: appsync.GraphqlApi;
  public readonly baseApiFolder: string;

  constructor(service: Service, params: AppSyncResolverAggregateParams<T>) {
    super(service, getLogicalName(AppSyncResolverAggregate.name));
    const { appSyncPrefab, baseApiFolder, resolvers, tablePrefab } = params;

    const dataSource = new appsync.DynamoDbDataSource(
      service,
      getLogicalName('dynamoDataSource', tablePrefab.tableName),
      { api: appSyncPrefab.api, table: tablePrefab.table, name: `${tablePrefab.tableName}TableDataSource` }
    );

    Object.keys(resolvers).map((r) => {
      const fieldName = r;
      const resolver = resolvers[r];
      const fnPipeline =
        resolver.resolversPipeline && resolver.resolversPipeline.length > 1
          ? resolver.resolversPipeline.map((rp) =>
              this.functionResolver(service, {
                api: appSyncPrefab.api,
                baseApiFolder,
                dataSource: rp.dataSource || dataSource,
                fieldName: fieldName,
                resolverName: rp.name,
                env: resolver.env,
              })
            )
          : [
              this.functionResolver(service, {
                api: appSyncPrefab.api,
                dataSource,
                baseApiFolder,
                fieldName: fieldName,
                env: resolver.env,
              }),
            ];

      // PipelineResolver
      new appsync.Resolver(service, getLogicalName('pipeline', fieldName), {
        api: appSyncPrefab.api,
        typeName: resolver.typeName,
        fieldName: fieldName,
        pipelineConfig: fnPipeline,
        code: appsync.Code.fromAsset(`${__dirname}/resolvers/pipeline.js`),
        runtime: appsync.FunctionRuntime.JS_1_0_0,
      });
    });
  }

  addDynamoTableDataSource = (tablePrefab: DynamoTablePrefab): appsync.DynamoDbDataSource => {
    return this.api.addDynamoDbDataSource(tablePrefab.tableName, tablePrefab.table, {
      name: `${tablePrefab.tableName}TableDataSource`,
    });
  };

  functionResolver = (service: Service, params: FunctionResolver): appsync.AppsyncFunction => {
    return new appsync.AppsyncFunction(
      service,
      getLogicalName('function', params.resolverName ? `${params.fieldName}${params.resolverName}` : params.fieldName),
      {
        api: params.api,
        dataSource: params.dataSource,
        name: params.resolverName ? `${params.fieldName}${capFirstLetter(params.resolverName)}` : params.fieldName,
        code: bundleAppSyncResolver(params.baseApiFolder, params.fieldName, params.resolverName, params.env),
        runtime: appsync.FunctionRuntime.JS_1_0_0,
      }
    );
  };
}
const bundleAppSyncResolver = (
  baseApiFolder: string,
  fieldName: string,
  resolverName = 'index',
  env: Record<string, string> | undefined
): appsync.Code => {
  const outFile = `cdk.out/resolvers/${toDashCase(fieldName)}/${resolverName}.js`;
  esbuild.buildSync({
    entryPoints: [`${baseApiFolder}/resolvers/${toDashCase(fieldName)}/${resolverName}.ts`],
    external: ['@aws-appsync/utils'],
    allowOverwrite: true,
    outfile: outFile,
    bundle: true,
    write: true,
    platform: 'node',
    target: 'esnext',
    format: 'esm',
    sourcesContent: false,
    // minify: true,
  });
  if (Object.keys(env || {}).length > 0) {
    let mappedFile = readFileSync(outFile, 'utf8');
    for (const [key, value] of Object.entries(env || {})) {
      mappedFile = mappedFile.replace(new RegExp(key, 'gi'), value);
    }
    writeFileSync(outFile, mappedFile);
  }
  return appsync.Code.fromAsset(outFile);
};
