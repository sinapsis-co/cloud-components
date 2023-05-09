export type DynamoKeyStructure = {
  pk: 'pk';
  sk: 'sk';
};

export class TableStoreBuilder<
  R extends string = string,
  S extends string | undefined = string,
  T extends string | number | symbol = string
> {
  tableName: string;
  keyMapping: { pk: R; sk?: S };
  indexes?: Record<T, { pk: string; sk?: string }> | undefined;
}
