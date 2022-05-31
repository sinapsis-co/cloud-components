Sinapsis Manager

1. Generate your personal token:
   https://github.com/settings/tokens/new

- Permissions: repo (complete) and packages (complete)
- Save your token safely

2. Login
   npm login --registry=https://npm.pkg.github.com

- In the password field use your personal token

3. Publish

- yarn release

4. How to add it to a new project?

- Create a file called .yarnrc and then add this line:
  "@sinapsis-co:registry" "https://npm.pkg.github.com"

- yarn add -d @sinapsis-co/{package_name}
