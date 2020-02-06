## `eslint-config-peopledoc`

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> JavaScript linting rules for PeopleDoc.

## Installation

In your project, remove exisiting ESLint's plugins or configuration, then:

```sh
# with npm
npm install --save-dev eslint-config-peopledoc

# or with yarn
yarn add eslint-config-peopledoc --dev
```

If you add this configuration to a project using Ember 3.12+, you need to install `babel-eslint`:

```sh
# with npm
npm install --save-dev babel-eslint

# or with yarn
yarn add babel-eslint --dev
```

## Usage

In your project, edit your [`eslint` configuration](https://eslint.org/docs/user-guide/getting-started#global-installation-and-usage) to extend `peopledoc` ESLint config:

```js
module.exports = {
  root: true,
  extends: ['peopledoc'],
  rules: {}
}
```

Preset configurations are available for:

**Vanilla JS:**

```js
extends: ['peopledoc']
```

**Ember:**

```js
extends: ['peopledoc/ember']
```

**ES5 only**

```js
extends: ['peopledoc/es5']
```

**Prettier**

```js
extends: ['peopledoc/prettier']
```

### Formatting Code

We use prettier-eslint in order to format it with `prettier` ([why?](https://prettier.io/docs/en/why-prettier.html)) then fix issue with `eslint --fix`:

```shell
./node_modules/.bin/prettier-eslint --list-different --single-quote {app,config,mirage,server,tests}/{**/,}*.js
```

Once you have review change you can write them with

```shell
./node_modules/.bin/prettier-eslint --write --single-quote {app,config,mirage,server,tests}/{**/,}*.js
```

:bulb: We recomment to add a custom `format` script to your _package.json_ so you can run `npm format`.

## License

This project is licensed under the [MIT License](LICENSE).
