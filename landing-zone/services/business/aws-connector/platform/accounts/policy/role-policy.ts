import IAM from 'aws-sdk/clients/iam';

export const getRolePolicy = (name: string, rootAccountId: string): IAM.Types.CreateRoleRequest => {
  return {
    RoleName: name,
    MaxSessionDuration: 43200,
    AssumeRolePolicyDocument: JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'sts:AssumeRole',
          Effect: 'Allow',
          Condition: {},
          Principal: {
            AWS: `arn:aws:iam::${rootAccountId}:root`,
          },
        },
      ],
    }),
  };
};
