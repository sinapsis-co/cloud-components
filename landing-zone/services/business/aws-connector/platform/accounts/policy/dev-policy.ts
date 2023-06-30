import IAM from 'aws-sdk/clients/iam';

export const getDevPolicy = (name: string, accountId: string): IAM.Types.CreatePolicyRequest => {
  return {
    PolicyName: name,
    PolicyDocument: JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Deny',
          Action: [
            'iam:UpdateAssumeRolePolicy',
            'iam:DetachRolePolicy',
            'iam:DeleteRolePolicy',
            'iam:TagRole',
            'iam:PutRolePermissionsBoundary',
            'iam:UntagPolicy',
            'iam:DeletePolicy',
            'iam:UpdateRole',
            'iam:PutRolePolicy',
            'iam:CreatePolicyVersion',
            'iam:CreateUser',
            'iam:SetDefaultPolicyVersion',
          ],
          Resource: [
            `arn:aws:iam::${accountId}:role/Sinapsis*`,
            `arn:aws:iam::${accountId}:policy/Sinapsis*`,
            `arn:aws:iam::${accountId}:user/*`,
          ],
        },
        {
          Effect: 'Allow',
          Action: '*',
          Resource: '*',
        },
      ],
    }),
  };
};
