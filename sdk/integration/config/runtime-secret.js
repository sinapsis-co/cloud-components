"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeSecret = exports.sm = void 0;
const client_secrets_manager_1 = require("@aws-sdk/client-secrets-manager");
const error_1 = require("error");
const tracing_1 = require("tracing");
const _secrets = {};
exports.sm = tracing_1.Tracing.captureIntegration(new client_secrets_manager_1.SecretsManagerClient({}));
const getRuntimeSecret = async (secretConfig, secretArn) => {
    const cmd = async () => {
        if (!_secrets[secretConfig.name]) {
            if (!secretArn)
                secretArn = process.env[secretConfig.name];
            if (!secretArn)
                throw new error_1.PlatformFault({ code: 'FAULT_SM_MISSING_SECRET', detail: secretArn });
            const response = await exports.sm.send(new client_secrets_manager_1.GetSecretValueCommand({ SecretId: secretArn }));
            const secret = JSON.parse(response.SecretString);
            _secrets[secretConfig.name] = secret;
        }
        return _secrets[secretConfig.name];
    };
    return tracing_1.Tracing.capture('GetRuntimeSecret', 'FAULT_SM_GET_RUNTIME_SECRET', secretConfig.name, cmd);
};
exports.getRuntimeSecret = getRuntimeSecret;
