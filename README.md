<h1 align="center">nextjs-ts-template</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.3.0-blue.svg?cacheSeconds=2592000" />
  <a href="./LICENSE" target="_blank">
    <img alt="License: Unlicense" src="https://img.shields.io/badge/License-Unlicense-yellow.svg" />
  </a>
</p>

> A template for React projects using NextJS and TypeScript.

## What it does
This template provides `NextJS` and `TypeScript` support for `React` projects.
The `React Suite` component library is provided out-of-the-box, but it can
easily be replaced, supplemented, or removed. Styling using `CSS`, `Sass`,
and `PostCSS` is supported by default.

Additionally, it provides support for the following libs:
- `jest` for unit testing.
- `storybook` for creating and testing a component library.
- `eslint` for linting JS and TS code, and `prettier` for code formatting.
- `husky` and `lint-staged` for formatting and running tests on Git hooks.
- `tailwind` for easy (themeable) styling.

N.B.: An older version of this template provided support for `Less` but this
was removed. 

## How to use the template
### Fork the template
On GitHub, you can use the `Use this template` button.

On the command line, you can use:

```sh
# Using the gh CLI
gh repo clone jamescallumyoung/nextjs-ts-template
# Clone using SSH
git clone git@github.com:jamescallumyoung/nextjs-ts-template.git
# Clone using HTTPS
git clone https://github.com/jamescallumyoung/nextjs-ts-template.git
```

### Configure the project
After cloning/forking the template, you'll probably want to configure the
project's settings:

- Configure the `package.json` with `yarn init`.
- Remove the fork's Git remote with `git remote rm origin`.

### Set up the git hooks
Husky should configure the git hooks automatically, but you can manually 
set them if needed by running `yarn run prepare`.

***
_This template was created️ by [James Young](https://github.com/jamescallumyoung).
This project is [Unlicense](./LICENSE) licensed._