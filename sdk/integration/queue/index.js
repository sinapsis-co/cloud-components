"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.sendMessages = exports.sqs = void 0;
const client_sqs_1 = require("@aws-sdk/client-sqs");
const error_1 = require("error");
const tracing_1 = require("tracing");
const chunk_array_1 = require("util/chunk-array");
exports.sqs = tracing_1.Tracing.captureIntegration(new client_sqs_1.SQSClient({}));
const MAX_MESSAGE_PER_BATCH = 10;
const sendMessages = async (messages, queueUrl, params) => {
    const cmd = async () => {
        const messagesChucked = (0, chunk_array_1.chunkArray)(messages, MAX_MESSAGE_PER_BATCH);
        return Promise.all(messagesChucked.map((messageChucked) => sendMessagesBatch(messageChucked, queueUrl, params)));
    };
    return tracing_1.Tracing.capture('SendMessages', 'FAULT_SQS_SEND_MESSAGES', queueUrl, cmd);
};
exports.sendMessages = sendMessages;
const deleteMessage = async (receiptHandle, queueUrl) => {
    const cmd = async () => {
        return exports.sqs.send(new client_sqs_1.DeleteMessageCommand({ QueueUrl: queueUrl, ReceiptHandle: receiptHandle }));
    };
    return tracing_1.Tracing.capture('DeleteMessage', 'FAULT_SQS_DELETE_MESSAGE', receiptHandle, cmd);
};
exports.deleteMessage = deleteMessage;
// Private use only
const sendMessagesBatch = async (messages, queueUrl, params) => {
    const entries = messages.map((message, index) => {
        return { Id: String(index), MessageBody: JSON.stringify(message), ...params };
    });
    return exports.sqs.send(new client_sqs_1.SendMessageBatchCommand({ QueueUrl: queueUrl, Entries: entries })).catch((err) => {
        throw new error_1.PlatformFault({ code: 'FAULT_SQS_SEND_MESSAGES', detail: err.message });
    });
};
