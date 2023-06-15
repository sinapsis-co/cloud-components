module.exports = {
  '*.{ts, tsx}': [
    () => 'npx tsc --pretty --noEmit',
    'npx eslint . --ext .ts --ext .tsx --max-warnings 0',
    'npx prettier --write .',
    "npx cspell '**/*.{ts, tsx}'",
  ],
  '*.json': 'prettier --write',
  '*.js': 'eslint --cache --fix',
  '*.{js,css,md}': 'prettier --write',
};
