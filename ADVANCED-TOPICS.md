## Existing Presets

##### Core

> Core configuration, currently design for `ES6`. All others configurations extend this one.

* file: _core.js_
* usage: not directly, refer to [_Default Configuration_](#Default-Configuration)

##### Default Configuration

> Default configuration, extends [`eslint:recommended`](https://eslint.org/docs/user-guide/configuring#using-eslintrecommended) and `core.js`.

* usage:

      extends: [ 'peopledoc' ]
* file: _index.js_

##### Ember Configuration

> For Ember project, extends `eslint:recommended`, popular [`ember-suave/recommended`](https://github.com/DockYard/eslint-plugin-ember-suave/) plugin and `core.js`.

* usage:

      extends: [ 'peopledoc/ember' ]
* file: _ember.js_

##### ES5 Configuration

> For legacy projects using `ES5` and `jquery`, it disables `ES2015` and `ES2016` feature based on [`es5`](https://github.com/nkt/eslint-plugin-es5)

* usage:

      extends: [ 'peopledoc/es5' ]
* file: _es5.js_
* targeted environment: browser

## Create a new preset

Let's assume you want to create a new preset for `ES8`.

1. First, **write documentation** of your preset in the _README.md_ ;
1. Next, create a **new file** at the root of the project `es8.js` ;
1. Then add a **basic configuration** that extends at least `eslint:recommended`:

  ```js
  module.exports = {
    extends: [ 'eslint:recommended' ]
  };
  ```
1. Be sure to **update the _package.json_** `files` property in order to make it available during `npm install`:

  ```diff
  "files": [
    "core.js",
    …
  +  "es8.js"
  ]
  ```
1. Create a **pull request** _es8_;
1. Try to install your PR on a project:

        npm install --save-dev peopledoc/eslint-config-peopledoc

### I want to…

#### Support a specific syntax

> Specify the version of ECMAScript syntax you want to use.

* what to use: [`ecmaVersion`](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
* example: for `ES6` syntax, use

  ```js
  { parserOptions: { ecmaVersion: 6 } }
  ```

#### Use a specific environment

> This will declare globals variable and other options.

* what to use: [`env`](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
* values: `es6`, `browser`, `node`, [much more](https://eslint.org/docs/user-guide/configuring#specifying-environments)
* dive in: [environments.js](https://github.com/eslint/eslint/blob/master/conf/environments.js) and [globals](https://github.com/sindresorhus/globals).
* example: for new ES6 global variables, use

  ```js
  { "env": { "es6": true } }
  ```

#### Use a plugin

> Plugins can expose additional rules and environments

* what to use: `plugins`
* dive in: [Working with Plugins](https://eslint.org/docs/developer-guide/working-with-plugins#rules-in-plugins)
* example: use `eslint-plugin-es5` to forbid `ES2015` and `ES2016` in our `ES5` config:

  ```js
  plugins: ['es5'],
  extends: [
    'eslint:recommended',
    'plugin:es5/no-es2015',
    'plugin:es5/no-es2016'
  ],
  ```
