export const getCognitoTemplateName = (triggerSource: string): string => {
  const templates = {
    CustomMessage_SignUp: 'confirmation-code',
    CustomMessage_ResendCode: 'confirmation-code',
    CustomMessage_ForgotPassword: 'password-recovery',
    CustomMessage_VerifyUserAttribute: 'confirmation-code',
    CustomMessage_UpdateUserAttribute: 'confirmation-code',
    CustomMessage_AdminCreateUser: 'confirmation-code',
    CustomMessage_Authentication: 'password-recovery',
  };
  return templates[triggerSource] || 'password-recovery';
};
