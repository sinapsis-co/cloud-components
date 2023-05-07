// eslint-disable-next-line @typescript-eslint/no-var-requires
const { aliasDangerous, configPaths } = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = (config) => {
  config = aliasDangerous({
    ...configPaths('tsconfig.paths.json'),
  })(config);

  return config;
};
