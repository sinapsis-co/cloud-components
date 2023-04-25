"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishMessages = void 0;
const client_sns_1 = require("@aws-sdk/client-sns");
const error_1 = require("error");
const tracing_1 = require("tracing");
const chunk_array_1 = require("util/chunk-array");
const sns = tracing_1.Tracing.captureIntegration(new client_sns_1.SNSClient({}));
const MAX_MESSAGE_PER_BATCH = 10;
const publishMessages = async (messages, topicArn) => {
    const cmd = async () => {
        const messagesChucked = (0, chunk_array_1.chunkArray)(messages, MAX_MESSAGE_PER_BATCH);
        return Promise.all(messagesChucked.map((messageChucked) => publishMessagesBatch(messageChucked, topicArn)));
    };
    return tracing_1.Tracing.capture('PushMessages', 'FAULT_SNS_SEND_MESSAGES', topicArn, cmd);
};
exports.publishMessages = publishMessages;
// Private use only
const publishMessagesBatch = async (messages, topicArn) => {
    const entries = messages.map((message, index) => {
        return { Id: String(index), Message: JSON.stringify(message) };
    });
    return sns.send(new client_sns_1.PublishBatchCommand({ TopicArn: topicArn, PublishBatchRequestEntries: entries })).catch((err) => {
        throw new error_1.PlatformFault({ code: 'FAULT_SNS_SEND_MESSAGES', detail: err.message });
    });
};
