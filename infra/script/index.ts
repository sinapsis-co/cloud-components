import { bootstrap } from './bootstrap';
import { deploy } from './deploy';
import { deploySPA } from './deploy-spa';
import { destroy } from './destroy';
import { startSPA } from './start-spa';

export const invoke = (command: string): any => {
  const ops = {
    deploy: deploy,
    bootstrap: bootstrap,
    destroy: destroy,
    'deploy-spa': deploySPA,
    'start-spa': startSPA,
  };
  if (!ops[command]) throw new Error('Missing command');
  return ops[command];
};
