"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.ssm = void 0;
const client_ssm_1 = require("@aws-sdk/client-ssm");
const error_1 = require("error");
const tracing_1 = require("tracing");
exports.ssm = tracing_1.Tracing.captureIntegration(new client_ssm_1.SSMClient({ region: 'us-east-1' }));
const getConfig = async () => {
    var _a;
    const Name = (_a = process.env.AWS_LAMBDA_FUNCTION_NAME) === null || _a === void 0 ? void 0 : _a.split('us-east-1.')[1];
    const cmd = async () => {
        const { Parameter } = await exports.ssm.send(new client_ssm_1.GetParameterCommand({ Name }));
        if (!Parameter || !Parameter.Value)
            throw new error_1.PlatformFault({ code: 'FAULT_SSM_INVALID_PARAMETER' });
        const config = JSON.parse(Parameter.Value);
        return config;
    };
    return tracing_1.Tracing.capture('GetEdgeConfig', 'FAULT_SSM_GET_EDGE_CONFIG', Name, cmd);
};
exports.getConfig = getConfig;
