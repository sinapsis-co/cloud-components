"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCall = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const error_1 = require("@sinapsis-co/cc-sdk/error");
const tracing_1 = require("@sinapsis-co/cc-sdk/tracing");
const apiCall = async (config, params, options) => {
    const { url, method } = config;
    const { pathParams = {}, queryParams = {}, headers = {}, body = {} } = params;
    const endpoint = Object.keys(pathParams).length
        ? Object.keys(pathParams).reduce((memo, pathP) => memo.replace(`{${pathP}}`, pathParams[pathP]), url)
        : url;
    const endpointWithQuery = Object.keys(queryParams).length
        ? `${endpoint}?${Object.keys(queryParams)
            .map((key) => `${key}=${queryParams[key]}`)
            .join('&')}`
        : endpoint;
    const controller = new AbortController();
    const timeout = options.timeout || parseInt(process.env.CC_FUNCTION_TIMEOUT) - 1;
    setTimeout(() => controller.abort(), timeout * 1000);
    const cmd = async () => {
        const callResult = await (0, node_fetch_1.default)(endpointWithQuery, {
            signal: controller.signal,
            method,
            headers: {
                'Content-Type': 'application/json',
                ...((options === null || options === void 0 ? void 0 : options.basicAuth) ? getBasicAuthHeader(options.basicAuth) : {}),
                ...(headers ? headers : {}),
            },
            ...(!['GET', 'HEAD'].includes(method) ? { body: JSON.stringify(body) } : {}),
        }).catch((e) => {
            if (e.type === 'aborted') {
                throw new error_1.PlatformFault({ code: 'FAULT_API_CALL_TIMEOUT', detail: `Timeout after ${timeout} seconds` });
            }
            throw new error_1.PlatformFault({ code: 'FAULT_API_CALL_NETWORK', detail: e.message });
        });
        const statusCode = callResult.status;
        if (!callResult.ok) {
            if (options.returnErrorResponse) {
                const errorResponse = await callResult.json();
                return { errorResponse, statusCode };
            }
            throw new error_1.PlatformFault({ code: 'FAULT_API_CALL_INVALID_RESPONSE', detail: await callResult.text() });
        }
        const response = await callResult.json();
        return { response };
    };
    return tracing_1.Tracing.capture('ApiCall', 'FAULT_API_CALL_UNHANDLED', endpointWithQuery, cmd, options.tracingMeta);
};
exports.apiCall = apiCall;
const getBasicAuthHeader = (basicAuth) => {
    return {
        Authorization: 'Basic ' + Buffer.from((basicAuth === null || basicAuth === void 0 ? void 0 : basicAuth.user) + ':' + (basicAuth === null || basicAuth === void 0 ? void 0 : basicAuth.pass)).toString('base64'),
    };
};
