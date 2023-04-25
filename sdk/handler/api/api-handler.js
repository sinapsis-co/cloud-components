"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiHandler = exports.DEFAULT_HEADERS = void 0;
const schemy_ts_1 = require("schemy-ts");
const error_1 = require("error");
const tracing_1 = require("tracing");
const timeout_1 = require("util/timeout");
const DEFAULT_MAX_AGE = process.env.CC_CACHE_MAX_AGE ? parseInt(process.env.CC_CACHE_MAX_AGE) : 10;
exports.DEFAULT_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Cache-Control': `max-age=${DEFAULT_MAX_AGE}`,
    'Content-Type': 'application/json',
};
const apiHandler = (handler, apiOptions, customHeaders, statusCode = 200) => {
    return async (event) => {
        const headers = { ...exports.DEFAULT_HEADERS, ...customHeaders };
        const tracing = new tracing_1.Tracing(event);
        try {
            const request = await apiParser(event, apiOptions.schema);
            if (apiOptions.authorizationMdw)
                apiOptions.authorizationMdw(request, apiOptions.scope);
            const result = await (0, timeout_1.timeoutController)(handler(event, request));
            tracing.close(result);
            return {
                headers,
                statusCode: statusCode,
                body: JSON.stringify(result),
            };
        }
        catch (error) {
            const handledException = error instanceof error_1.PlatformError || error instanceof error_1.PlatformFault
                ? error
                : new error_1.PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
            handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: event.headers['X-Request-ID'] });
            tracing.failureClose(handledException);
            return handledException.returnException(headers);
        }
    };
};
exports.apiHandler = apiHandler;
const apiParser = async (event, schema) => {
    var _a, _b;
    const body = await bodyParser(event.body, schema);
    const pathParams = paramsParser(event.pathParameters);
    const queryParams = paramsParser(event.queryStringParameters);
    const claims = paramsParser((_b = (_a = event.requestContext.authorizer) === null || _a === void 0 ? void 0 : _a.jwt) === null || _b === void 0 ? void 0 : _b.claims);
    return { body, pathParams, queryParams, claims };
};
const bodyParser = async (body, schema) => {
    try {
        const parsedBody = JSON.parse(body || '{}');
        if (schema) {
            return await schemy_ts_1.Schemy.validate(parsedBody, schema, false).catch((e) => {
                throw new error_1.PlatformError({ code: 'ERROR_BODY_VALIDATION', detail: e });
            });
        }
        return parsedBody;
    }
    catch (e) {
        if (e instanceof error_1.PlatformError)
            throw e;
        throw new error_1.PlatformError({ code: 'ERROR_MALFORMED_BODY', detail: e.message });
    }
};
const paramsParser = (params = {}) => {
    Object.keys(params).forEach((pName) => {
        if (pName.startsWith('custom:'))
            params[pName.replace('custom:', '')] = params[pName];
    });
    return params;
};
