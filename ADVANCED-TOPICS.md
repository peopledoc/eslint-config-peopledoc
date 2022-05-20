### Usage

### Disable Rules
[Disabling Rules with Inline Comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

#### Disable Rule For Single Line

  ```js
  // eslint-disable-next-line no-alert
  alert('foo');
  ```

:warning: don't use `// eslint-disable-line` as formatter like `prettier` will move them to a separate line.


#### Disable Rule For A Block Of Lines

  ```js
  /* eslint-disable no-alert */
  alert('doing awful things');
  /* eslint-enable no-alert */
  ```

#### Disable Linting Completely

```js
/* eslint-disable */
…
/* eslint-enable */
```

```js
// eslint-disable-next-line
```

#### Disable Multiple Rules

Separate them with `,` (comma)

```js
/* eslint-disable no-alert, no-console */
…
/* eslint-enable */
```

```js
// eslint-disable-next-line no-alert, no-console
```

### Declare Global Variables

You can [do that at several levels](https://eslint.org/docs/user-guide/configuring#specifying-globals): file, globally or per directory.

#### Using `env`

For the common use-cases you can leverage the [`env` property](https://eslint.org/docs/user-guide/configuring#specifying-environments) to setup an environment that defines [global variables](https://github.com/sindresorhus/globals/blob/master/globals.json).

#### At File Level

```js
/* global loginUser, logmatic */
```
or
```js
/* eslint-env node, browser, jquery */
```

#### At Global Level

Edit your configuration file to add a `globals` object where each key is a global variable we want to use:

  ```js
    {
      globals: {
        loginUser: true,
        logmatic: true
      }
    }
  ```

or add a `env` object where each key is a [predefined preset of globals](https://eslint.org/docs/user-guide/configuring#specifying-environments):

  ```js
  {
    env : {
      node: true,
      jquery: true,
      browser: true,
    }
  }
  ```

#### In Specific Directory

Create a `.eslintrc.js` file in the targeted directory.

```js
module.exports = {
  globals: {
    logmatic: true,
  }
};
```

### Existing Presets

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

> For Ember project, extends `eslint:recommended`, `ember/recommended` and `core.js`.

* usage:

      extends: [ 'peopledoc/ember' ]
* file: _ember.js_

##### ES5 Configuration

> For legacy projects using `ES5` and `jquery`, it disables `ES2015` and `ES2016` feature based on [`es5`](https://github.com/nkt/eslint-plugin-es5)

* usage:

      extends: [ 'peopledoc/es5' ]
* file: _es5.js_
* targeted environment: browser

### Create a new preset

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

* what to use: [`parserOptions.ecmaVersion`](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)
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
