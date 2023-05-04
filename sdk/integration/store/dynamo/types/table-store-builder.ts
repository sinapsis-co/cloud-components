export type DynamoKeyStructure = {
  pk: string;
  sk?: string;
};

export class TableStoreBuilder {
  public tableName: string;
  public keyMapping: DynamoKeyStructure;
  public indexes?: Record<string, DynamoKeyStructure | undefined>;
}
