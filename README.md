# String Helpers

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Codecov Status][codecov-image]][codecov-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

Array helpers, so you can get very fast your data from the array.

here an example array.

```
import { Str } from '@hckrnews/string';

var exampleString = new Str('pieter');
```

## ucfirst

...

```
exampleArray.ucfirst;

Pieter
```


## Test the package.

```
npm test
```

This will run all the tests in the test folder with mocha.

If you only want to check the eslint rules, just run.

```
npm run lint
```

## node.js

To include `@hckrnews/string` in Node, first install with npm.

```
npm install @hckrnews/stromg
```

Use the package in your node files.

```
import { Str } from '@hckrnews/string';
```



[downloads-image]: https://img.shields.io/npm/dm/@hckrnews/string.svg
[npm-url]: https://www.npmjs.com/package/@hckrnews/string
[npm-image]: https://img.shields.io/npm/v/@hckrnews/string.svg
[npm-stats]: https://npm-stat.com/charts.html?package=@hckrnews/string
[travis-url]: https://travis-ci.org/hckrnews/string
[travis-image]: https://img.shields.io/travis/hckrnews/string/master.svg
[coveralls-url]: https://coveralls.io/r/hckrnews/string
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/string/master.svg
[codecov-url]: https://codecov.io/gh/hckrnews/string
[codecov-image]: https://img.shields.io/codecov/c/github/hckrnews/string.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/string/?branch=master
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/string/badges/quality-score.png?b=master
