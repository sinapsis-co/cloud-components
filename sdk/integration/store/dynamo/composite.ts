import { dynamodb } from './client';
import { transactWrite } from './composite-operations/transact-write';
import { RepositoryComposite } from './types/composite';
import { OperationConfigComposite, ViewConfig } from './types/config';
import { TableStoreBuilder } from './types/table-store-builder';

export const compositeRepository = <T extends TableStoreBuilder>(
  table: typeof TableStoreBuilder<T['keyMapping']['PK'], T['keyMapping']['SK'], keyof T['indexes']>,
  repoConfig: ViewConfig<T>
): RepositoryComposite => {
  const operationConfig: OperationConfigComposite<T> = {
    tableName: repoConfig.tableName,
    dynamoClient: dynamodb,
  };
  return {
    // entityDeserialize: entityDeserialize<M>(table),
    transactWrite: transactWrite(operationConfig),
  };
};
