import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export type Modifier = (lambda: NodejsFunction) => void;

export const combineModifiers = (modifiers: Modifier[]): Modifier => {
  return (lambda: NodejsFunction) => {
    for (const modifier of modifiers) {
      modifier(lambda);
    }
  };
};
