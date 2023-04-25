"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCognitoUser = exports.deleteCognitoUser = exports.cognito = void 0;
const clientCognitoIdentityProvider = __importStar(require("@aws-sdk/client-cognito-identity-provider"));
const tracing_1 = require("tracing");
exports.cognito = tracing_1.Tracing.captureIntegration(new clientCognitoIdentityProvider.CognitoIdentityProviderClient({}));
const deleteCognitoUser = async (username, userPoolId = process.env.USER_POOL_ID) => {
    const cmd = () => {
        return exports.cognito.send(new clientCognitoIdentityProvider.AdminDeleteUserCommand({ UserPoolId: userPoolId, Username: username }));
    };
    return tracing_1.Tracing.capture('DeleteCognitoUser', 'FAULT_COG_DELETE_USER', username, cmd);
};
exports.deleteCognitoUser = deleteCognitoUser;
const updateCognitoUser = async (username, attributes, userPoolId = process.env.USER_POOL_ID) => {
    const cmd = () => {
        return exports.cognito.send(new clientCognitoIdentityProvider.AdminUpdateUserAttributesCommand({
            UserPoolId: userPoolId,
            Username: username,
            UserAttributes: attributes,
        }));
    };
    return tracing_1.Tracing.capture('UpdateCognitoUser', 'FAULT_COG_UPDATE_USER', username, cmd);
};
exports.updateCognitoUser = updateCognitoUser;
