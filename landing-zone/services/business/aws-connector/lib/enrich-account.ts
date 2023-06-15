import { AwsAccount, EnrichedAwsAccount } from '../entities/aws-account';

export const enrichAccount = (awsAccount: AwsAccount): AwsAccount & EnrichedAwsAccount => {
  const roleArn = `arn:aws:iam::${awsAccount.account}:role/${awsAccount.roleName}`;
  const baseConfig = `[${awsAccount.projectName}-${awsAccount.envName}]\nrole_arn = ${roleArn}`;
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return {
    ...awsAccount,
    roleArn,
    color,
    localProfileConfig: `${baseConfig}\nsource_profile = sinapsis-master`,
    consoleWebConsole: `${baseConfig}\ncolor = ${color}`,
  };
};

export const normalizeColors = (
  awsAccounts: (AwsAccount & EnrichedAwsAccount)[]
): (AwsAccount & EnrichedAwsAccount)[] => {
  const colors: Record<string, string> = {};
  return awsAccounts.map((a) => {
    if (colors[a.projectName]) {
      a.consoleWebConsole = `[${a.projectName}-${a.envName}]\nrole_arn = ${a.roleArn}\ncolor = ${
        colors[a.projectName]
      }`;
      a.color = colors[a.projectName];
    } else {
      colors[a.projectName] = a.color;
    }
    return a;
  });
};
