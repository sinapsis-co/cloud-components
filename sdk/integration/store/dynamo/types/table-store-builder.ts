export type DynamoKeyStructure = {
  pk: 'pk';
  sk: 'sk';
};

export class TableStoreBuilder<R extends string = string, S extends string = string, T extends string = string> {
  tableName: string;
  keyMapping: { pk: R; sk?: S };
  indexes?: Record<T, { pk: string; sk?: string }> | undefined;
}
