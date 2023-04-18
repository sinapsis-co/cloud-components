/* eslint-disable no-console */
export {};
(async () => {
  try {
    const [path] = process.argv.slice(2);
    const imported = await import(`./${path}`);
    const result = await imported.handler();
    console.log(result);
  } catch (error: any) {
    console.error(error.returnException());
    // error.throwException();
  }
})();
