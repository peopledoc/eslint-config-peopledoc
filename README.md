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

If you add this configuration to a project using Ember 3.24+ and ESLint 8, you need to install `@babel/core` and `@babel/eslint-parser`:

```sh
# with npm
npm install eslint @babel/core @babel/eslint-parser --save-dev

# or with yarn
yarn add eslint @babel/core @babel/eslint-parser -D
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

## Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/edouard-lopez">
            <img src="https://avatars.githubusercontent.com/u/1212392?v=4" width="100;" alt="edouard-lopez"/>
            <br />
            <sub><b>edouard-lopez</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/GreatWizard">
            <img src="https://avatars.githubusercontent.com/u/1322081?v=4" width="100;" alt="GreatWizard"/>
            <br />
            <sub><b>GreatWizard</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/MrChocolatine">
            <img src="https://avatars.githubusercontent.com/u/47531779?v=4" width="100;" alt="MrChocolatine"/>
            <br />
            <sub><b>MrChocolatine</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yonmey">
            <img src="https://avatars.githubusercontent.com/u/3025706?v=4" width="100;" alt="yonmey"/>
            <br />
            <sub><b>yonmey</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ryuran">
            <img src="https://avatars.githubusercontent.com/u/1309340?v=4" width="100;" alt="ryuran"/>
            <br />
            <sub><b>ryuran</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/xcambar">
            <img src="https://avatars.githubusercontent.com/u/657654?v=4" width="100;" alt="xcambar"/>
            <br />
            <sub><b>xcambar</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/ndekeister-us">
            <img src="https://avatars.githubusercontent.com/u/56396753?v=4" width="100;" alt="ndekeister-us"/>
            <br />
            <sub><b>ndekeister-us</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yonmey">
            <img src="https://avatars.githubusercontent.com/u/3025706?v=4" width="100;" alt="yonmey"/>
            <br />
            <sub><b>yonmey</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/KamiKillertO">
            <img src="https://avatars.githubusercontent.com/u/9579729?v=4" width="100;" alt="KamiKillertO"/>
            <br />
            <sub><b>KamiKillertO</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/njoyard">
            <img src="https://avatars.githubusercontent.com/u/127842?v=4" width="100;" alt="njoyard"/>
            <br />
            <sub><b>njoyard</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Pixelik">
            <img src="https://avatars.githubusercontent.com/u/1423394?v=4" width="100;" alt="Pixelik"/>
            <br />
            <sub><b>Pixelik</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/saintsebastian">
            <img src="https://avatars.githubusercontent.com/u/8288415?v=4" width="100;" alt="saintsebastian"/>
            <br />
            <sub><b>saintsebastian</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->

## License

This project is licensed under the [MIT License](LICENSE).
