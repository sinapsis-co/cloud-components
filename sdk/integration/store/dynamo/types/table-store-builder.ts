// export type TablaIndexes<T extends string | number | symbol = string> = Record<T, { PK: string; SK?: string }>;

export class TableStoreBuilder<
  R extends string = string,
  S extends string | undefined = string,
  T extends string | number | symbol = string
> {
  tableName: string;
  keyMapping: { PK: R; SK?: S };
  indexes?: Record<T, { PK: string; SK?: string }> | undefined;
}
