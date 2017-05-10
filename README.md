mock-require-assets
===================

[![Greenkeeper badge](https://badges.greenkeeper.io/satya164/mock-require-assets.svg)](https://greenkeeper.io/)

Simple mocks for assets, e.g. - images, styles

## Why

With tools like [Webpack](https://webpack.github.io), React Native packager etc. allowing you to require all kinds of files like images, testing becomes more difficult as you've to now manually mock your assets. You can just throw this module in and let it do the magic.

## Installation

```sh
npm install --save-dev mock-require-assets
```

## Usage

Require `mock-require-assets` with your test runner. You can also require `mock-require-assets/images` or `mock-require-assets/styles` to mock only images and stylesheets specifically.

### Mocha

Use the `--require` argument to the CLI.

```sh
mocha --require mock-require-assets
```

### Ava

Add it the `ava.require` in `package.json`.

```json
{

  ...

  "ava": {
    "require": [
      "mock-require-assets"
    ]
  }

  ...

}
```
