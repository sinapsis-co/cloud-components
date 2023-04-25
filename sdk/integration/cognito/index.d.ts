import * as clientCognitoIdentityProvider from '@aws-sdk/client-cognito-identity-provider';
export declare const cognito: clientCognitoIdentityProvider.CognitoIdentityProviderClient;
export type AttributeListType = clientCognitoIdentityProvider.AdminUpdateUserAttributesCommandInput['UserAttributes'];
export declare const deleteCognitoUser: (username: string, userPoolId?: string | undefined) => Promise<clientCognitoIdentityProvider.AdminDeleteUserCommandOutput>;
export declare const updateCognitoUser: (username: string, attributes: AttributeListType, userPoolId?: string | undefined) => Promise<clientCognitoIdentityProvider.AdminUpdateUserAttributesCommandOutput>;
