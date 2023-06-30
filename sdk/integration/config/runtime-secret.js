"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeSecret = exports.sm = void 0;
const client_secrets_manager_1 = require("@aws-sdk/client-secrets-manager");
const error_1 = require("error");
const tracing_1 = require("tracing");
const _secrets = {};
exports.sm = tracing_1.Tracing.captureIntegration(new client_secrets_manager_1.SecretsManagerClient({}));
const getRuntimeSecret = (secretConfig, secretArn) => __awaiter(void 0, void 0, void 0, function* () {
    const cmd = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!_secrets[secretConfig.name]) {
            if (!secretArn)
                secretArn = process.env[secretConfig.name];
            if (!secretArn)
                throw new error_1.PlatformFault({ code: 'FAULT_SM_MISSING_SECRET', detail: secretArn });
            const response = yield exports.sm.send(new client_secrets_manager_1.GetSecretValueCommand({ SecretId: secretArn }));
            const secret = JSON.parse(response.SecretString);
            _secrets[secretConfig.name] = secret;
        }
        return _secrets[secretConfig.name];
    });
    return (0, tracing_1.traceableFunction)('GetRuntimeSecret', 'FAULT_SM_GET_RUNTIME_SECRET', secretConfig.name, cmd);
});
exports.getRuntimeSecret = getRuntimeSecret;
