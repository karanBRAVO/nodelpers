---
id: locally
sidebar_label: Locally
sidebar_position: 3
---

# Locally

Get the code on your system. Make sure you have completed the previous step i.e. `pre-requisites`.

1. First of all [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this project.
2. Next `->` clone your branch.

   ```bash
   git clone https://github.com/<your-user-name>/<nodelpers>.git
   ```

   `note`: replace `<your-user-name>` with your github username.

3. Move to cloned dir and if you want to make changes to our codebase then create new branch

   ```bash
   cd nodelpers/

   git checkout -b <your-branch-name>
   ```

4. Use similar node version

   ```bash
   nvm use
   ```

5. If you want to work on `core` package then install the packages in the root dir

   ```bash
   npm ci
   ```

6. then run the tests

   ```bash
   npm run testall
   ```

7. If you want to update the `docs` then move to docs dir and install the dependencies

   ```bash
   cd docs/
   npm ci
   npm run start
   ```

Now you have successfully clone the repo!

_Start working_ on your **first patch**.

Follow [CONTRIBUTING.md](https://github.com/karanBRAVO/nodelpers/blob/main/CONTRIBUTING.md#code-of-conduct)
