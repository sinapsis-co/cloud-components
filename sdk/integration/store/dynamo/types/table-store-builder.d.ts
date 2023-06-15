export declare class TableStoreBuilder<PK extends string = string, SK extends string | undefined = string, GenericIndexName extends string | number | symbol = string, AttIndexName extends string | number | symbol = string, AttIndexPK extends string | number | symbol = string, AttIndexSK extends string | number | symbol = string> {
    tableName: string;
    keyMapping: {
        PK: PK;
        SK?: SK;
    };
    genericIndexes?: Record<GenericIndexName, {
        PK: string;
        SK?: string;
    }> | undefined;
    attIndexes?: Record<AttIndexName, {
        PK: AttIndexPK;
        SK?: AttIndexSK;
    }> | undefined;
}
