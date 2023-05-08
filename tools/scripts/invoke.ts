import { PlatformError, PlatformFault } from 'error/index';

/* eslint-disable no-console */
export {};

(async () => {
  try {
    const [path] = process.argv.slice(2);
    const imported = await import(`${path}`);
    const result = await imported.handler();
    console.log(result);
  } catch (error: any) {
    if (error instanceof PlatformError || error instanceof PlatformFault) {
      console.error(error.returnException());
    } else {
      new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message }).returnException();
    }
  }
})();
