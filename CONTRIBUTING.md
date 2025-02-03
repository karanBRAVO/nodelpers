# Contributing Guidelines

_Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!_

There are various ways in which you can contribute to this project such as `updating docs`, `reporting bugs`, `writing patches`, `fixing typos`.

When making any critical change to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Getting Started

Make sure `node.js` is installed on your system and we prefer `visual-studio-code` as IDE.

1. First of all, `fork` this project.
2. Next -> clone your branch.

   ```bash
   git clone https://github.com/<your-user-name>/<nodelpers>.git
   ```

   `note`: replace `<your-user-name>` with your github username.

3. Move to cloned dir

   ```bash
   cd nodelpers/
   ```

4. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)

5. Use similar node version

   ```bash
   nvm use
   ```

6. If you want to work on core package then install the packages in the root dir

   ```bash
   npm ci
   ```

7. If you want to update the docs then move to `docs` dir

   ```bash
   cd docs/
   ```

   Install the packages using

   ```bash
   npm ci
   ```

Now you have successfully clone the repo!

Start working on your first patch.

## Code of Conduct

To ensure a welcoming environment for all contributors, we follow a Code of Conduct. Please read and adhere to it during your interactions with this repository.

## Code Style and Standards

- Ensure your code adheres to the project's style guide. We recommend using `ESLint` and `Prettier` to maintain consistency.
- Run linting before committing changes:

  ```bash
  npm run lint
  ```

- Run prettier to format the code before commiting changes:

  ```bash
  npm run format
  ```

## Writing Tests

- All new features or bug fixes must include appropriate tests.
- We use Jest for testing. Tests are located in the tests/ folder
- To run the tests:

  ```bash
  npm run test
  ```

- If you add a new utility function, create a corresponding test file in the tests/ directory.

## Submitting Pull Requests

- Ensure that your changes are made in a feature branch:

  ```bash
  git checkout -b feature/your-feature-name
  ```

- Write clear and concise commit messages. Follow Conventional Commits for better versioning and changelogs.
- Before opening a pull request:
  - Run tests to ensure they pass.
  - Check that your code is well-linted and formatted.
- Submit your pull request to the main branch and include a detailed description of your changes.

## Reporting Bugs

If you encounter a bug, please open an issue and provide the following details:

- `Description`: A clear and concise explanation of the issue.
- `Steps to Reproduce`: Detailed steps that lead to the bug.
- `Expected Behavior`: What you expected to happen.
- `Actual Behavior`: What actually happened.
- `Environment`: Include Node.js version, OS, and other relevant details.

## Feature Requests

We welcome suggestions for new features! Please open an issue and include:

- `Description`: Clear explanation of the feature.
- `Use Case`: Why this feature is needed.
- `Alternatives`: Any alternative solutions or workarounds you considered.

## Documentation Contributions

Documentation for `nodelpers` is located in the `docs/` folder, built using Docusaurus.

- To preview the documentation locally:

  ```bash
  cd docs/
  npm start
  ```

- Contributions to documentation should follow the same pull request workflow as code changes.
