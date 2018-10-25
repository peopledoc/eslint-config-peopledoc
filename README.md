## eslint-config-peopledoc

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> JavaScript linting rules for PeopleDoc.

## Installation

In your project, remove exisiting eslint's plugins or configuration, then:

    npm install --save-dev peopledoc/eslint-config-peopledoc

## Usage

In your project, edit your
[`eslint` configuration](https://eslint.org/docs/user-guide/getting-started#global-installation-and-usage)
to extend `peopledoc` eslint config:

    module.exports = {
      root: true,
      extends: ['peopledoc'],
      rules: {}
    };

Preset configurations are available for:

**vanilla JS:**

    extends: ['peopledoc']

**Ember:**

    extends: ['peopledoc/ember']

**ES5 only**

    extends: ['peopledoc/es5']

### Formatting Code

We use prettier-eslint in order to format it with `prettier` ([why?](https://prettier.io/docs/en/why-prettier.html)) then fix issue with `eslint --fix`:

    ./node_modules/.bin/prettier-eslint --list-different --single-quote {app,config,mirage,lib,server,tests}/{**/,}*.js

Once you have review change you can write them with

    ./node_modules/.bin/prettier-eslint --write --single-quote {app,config,mirage,lib,server,tests}/{**/,}*.js

:bulb: We recomment to add a custom `format` script to your
_package.json_ so you can run `npm format`

## License

This project is licensed under the [MIT License](LICENSE).
