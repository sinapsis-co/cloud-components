Cloud Components Setup

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

Steps to add a new feature in Cloud Components

1. Create a new branch from dev

2. The first thing is always to update the packages, that is, the infrastructure/platform code. These changes can be tested by manually deploying to an ephemeral dev development environment. For example dev-name

3. When everything is tested in my ephemeral environment, I can create a PR to be reviewed by the team. In addition, if it is a new service or a significant change to something already existing, the corresponding documentation must be updated.

4. Once the PR is approved, a release is made by running the release.bash file that is inside the project

5. When the release is ready, the modified code is merged into templates so that it can be deployed to dev automatically with the pipeline. In addition, we will be able to integrate this new version in the projects that we want
