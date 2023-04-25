"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchEvent = exports.eventBridge = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const client_eventbridge_1 = require("@aws-sdk/client-eventbridge");
const tracing_1 = require("tracing");
exports.eventBridge = tracing_1.Tracing.captureIntegration(new client_eventbridge_1.EventBridgeClient({}));
const dispatchEvent = async (eventConfig, payload, tracingMeta, eventBusName = process.env.EVENT_BUS) => {
    const event = {
        EventBusName: eventBusName,
        DetailType: eventConfig.name,
        Source: eventConfig.source,
        Detail: JSON.stringify(payload),
        Resources: [],
    };
    const cmd = () => exports.eventBridge.send(new client_eventbridge_1.PutEventsCommand({ Entries: [event] }));
    await tracing_1.Tracing.capture('Dispatch', 'FAULT_EVENT_DISPATCH', eventConfig.name, cmd, tracingMeta);
};
exports.dispatchEvent = dispatchEvent;
