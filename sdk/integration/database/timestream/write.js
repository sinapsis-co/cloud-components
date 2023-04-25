"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestreamWrite = void 0;
const client_timestream_write_1 = require("@aws-sdk/client-timestream-write");
const error_1 = require("error");
const tracing_1 = require("tracing");
const chunk_array_1 = require("util/chunk-array");
const timestream = tracing_1.Tracing.captureIntegration(new client_timestream_write_1.TimestreamWriteClient({}));
const MAX_MESSAGE_PER_BATCH = 100;
const timestreamWrite = async (records, DatabaseName, TableName) => {
    const cmd = async () => {
        const chunk = (0, chunk_array_1.chunkArray)(records, MAX_MESSAGE_PER_BATCH);
        return Promise.all(chunk.map((c) => timestreamWriteBatch(c, DatabaseName, TableName)));
    };
    return tracing_1.Tracing.capture('Write', 'FAULT_TS_WRITE', TableName, cmd);
};
exports.timestreamWrite = timestreamWrite;
// Internal use only
const timestreamWriteBatch = async (Records, DatabaseName, TableName) => {
    const request = timestream.send(new client_timestream_write_1.WriteRecordsCommand({ DatabaseName, TableName, Records })).catch((err) => {
        throw new error_1.PlatformFault({
            code: 'FAULT_TS_WRITE',
            detail: err.code === 'RejectedRecordsException' ? request.response.httpResponse.body.toString() : err.message,
        });
    });
};
