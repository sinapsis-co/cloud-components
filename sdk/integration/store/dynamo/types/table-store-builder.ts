
export type DynamoKeyStructure = { pk: string; sk?: string };

export type TableBuilderKeys = {
  tableName: string;
  indexes: Record<string, { pk: string; sk?: string }> | undefined;
  storeMapping: {
    key: DynamoKeyStructure;
    timers?: Record<string, string>;
  };
};

export type TableStoreBuilder<TBuilder extends TableBuilderKeys = TableBuilderKeys> = {
  tableName: TBuilder['tableName'];
  indexes: TBuilder['indexes'];
  storeMapping: TBuilder['storeMapping'];
};
