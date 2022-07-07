import { bootstrap } from './bootstrap';
import { deploy } from './deploy';
import { deploySPA } from './deploy-spa';
import { deploySSR } from './deploy-ssr';
import { destroy } from './destroy';
import { startSPA } from './start-spa';
import { startSSR } from './start-ssr';

export const invoke = (command: string): any => {
  const ops = {
    deploy: deploy,
    bootstrap: bootstrap,
    destroy: destroy,
    'deploy-spa': deploySPA,
    'start-spa': startSPA,
    'deploy-ssr': deploySSR,
    'start-ssr': startSSR,
  };
  if (!ops[command]) throw new Error('Missing command');
  return ops[command];
};
