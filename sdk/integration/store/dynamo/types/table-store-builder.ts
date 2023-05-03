export type DynamoKeyStructure = { pk: string; sk?: string };

export type TableBuilderKeys = {
  tableName: string;
  indexes: Record<string, { pk: string; sk?: string }> | undefined;
  keyMapping: DynamoKeyStructure;
};

export type TableStoreBuilder<TBuilder extends TableBuilderKeys = TableBuilderKeys> = {
  tableName: TBuilder['tableName'];
  indexes: TBuilder['indexes'];
  keyMapping: TBuilder['keyMapping'];
};
