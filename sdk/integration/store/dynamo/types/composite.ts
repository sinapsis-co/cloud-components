import { Put } from '@aws-sdk/client-dynamodb';
import { TransactWriteCommand } from '@aws-sdk/lib-dynamodb';
import { Model } from '@sinapsis-co/cc-sdk/model';

export type RepositoryComposite = {
  transactWrite: (
    items: { entity: Model['Entity']; params?: Omit<Put, 'TableName' | 'Item'> }[],
    params?: Partial<TransactWriteCommand> & { emitEvent?: boolean; allowOverwrite?: boolean }
  ) => Promise<void>;
};
