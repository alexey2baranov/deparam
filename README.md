# jQuery deparam

A `$.param()` reverse function without dependencies.
Supports array-parameters and object-parameters with infinite nesting.
An extracted and refactored `deparam` method from Ben Alman's jQuery BBQ

## installation
```bash
# install
npm install deparam
yarn add deparam
```

## tests
```js
npm test
yarn run test
```

## sample usage

```js
var deparam = require('deparam')
var query = 'a=1&b=qwerty'
var params = deparam(query) // params == { a: '1', b: 'qwerty' }

// webpack
Import deparam from 'deparam';
const query = 'a=1&b=qwerty'
const params = deparam(query) // params == { a: '1', b: 'qwerty' }
```
