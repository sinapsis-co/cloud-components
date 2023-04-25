"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestreamQuery = void 0;
const client_timestream_query_1 = require("@aws-sdk/client-timestream-query");
const tracing_1 = require("tracing");
const timestream = tracing_1.Tracing.captureIntegration(new client_timestream_query_1.TimestreamQueryClient({}));
// const emptyQueryResponse: QueryResponse = {
//   ColumnInfo: [],
//   QueryId: '',
//   Rows: [],
// };
//TODO: Implement pagination and types
const timestreamQuery = async (query, nextToken) => {
    const cmd = async () => {
        const queryResults = await timestream.send(new client_timestream_query_1.QueryCommand({ QueryString: query, NextToken: nextToken }));
        return queryResults;
    };
    return tracing_1.Tracing.capture('Query', 'FAULT_TS_WRITE', 'Query', cmd);
};
exports.timestreamQuery = timestreamQuery;
