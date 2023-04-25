export type TableBuilderKeys = {
    tableName: string;
    ttlAttribute: boolean | undefined;
    indexes: readonly string[] | undefined;
    storeMapping: {
        key: {
            pk: string;
            sk?: string;
        };
        timers?: Record<string, string>;
    };
};
export type TableBuilder<TBuilder extends TableBuilderKeys = TableBuilderKeys> = {
    tableName: TBuilder['tableName'];
    ttlAttribute: TBuilder['ttlAttribute'];
    indexes: TBuilder['indexes'];
    storeMapping: TBuilder['storeMapping'];
};
