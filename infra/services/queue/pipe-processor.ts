/* eslint-disable @typescript-eslint/no-unused-vars */
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export abstract class PipeStep {
  public readonly producer: NodejsFunction;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  pipeFrom(lambdaFunction: NodejsFunction, envName = 'DEST_QUEUE'): void {}
}

export type ExecutionType = 'serial';

export class PipeProcessor {
  public readonly pipeSteps: { position: number; execution: ExecutionType; step: PipeStep }[];
  constructor(pipeSteps: { position: number; execution: ExecutionType; step: PipeStep }[]) {
    this.pipeSteps = pipeSteps;
    for (let index = 1; index < pipeSteps.length; index++) {
      if (pipeSteps[index - 1].step.producer) pipeSteps[index].step.pipeFrom(pipeSteps[index - 1].step.producer);
    }
  }
}
