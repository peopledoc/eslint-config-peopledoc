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

**Ember Application:**

```js
extends: ['peopledoc/ember']
```

**Ember Addon:**

```js
extends: ['peopledoc/ember-addon']
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

We recommend to use `eslint . --fix`.

## License

This project is licensed under the [MIT License](LICENSE).
