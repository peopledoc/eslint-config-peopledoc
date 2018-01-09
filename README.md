## eslint-config-peopledoc

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

## License

This project is licensed under the [MIT License](LICENSE).
