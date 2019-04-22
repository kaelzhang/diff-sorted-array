[![Build Status](https://travis-ci.org/kaelzhang/diff-sorted-array.svg?branch=master)](https://travis-ci.org/kaelzhang/diff-sorted-array)
[![Coverage](https://codecov.io/gh/kaelzhang/diff-sorted-array/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/diff-sorted-array)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/diff-sorted-array?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/diff-sorted-array)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/diff-sorted-array.svg)](http://badge.fury.io/js/diff-sorted-array)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/diff-sorted-array.svg)](https://www.npmjs.org/package/diff-sorted-array)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/diff-sorted-array.svg)](https://david-dm.org/kaelzhang/diff-sorted-array)
-->

# diff-sorted-array

Diff two sorted array for best performance.

## Install

```sh
$ npm i diff-sorted-array
```

## Usage

```js
const {diff, justDiff, asc, desc} = require('diff-sorted-array')
```

### diff(a, b)

- **a** `Array`
- **b** `Array`

```js
const a = [2, 3, 1]
const b = [3, 4, 2]

const result = diff(a, b, sorter)

result.unchanged
// [2, 3]

result.added
// [4]

result.deleted
// [1]
```

### justDiff(a, b, sorter)

- **sorter** `Function(a: any, b: any): number` the compareFunction of `Array.prototype.sort(compareFunction)`

Sometimes we want to do the sorting ourself, so that we can manage the process to increase performance.

`justDiff` only accepts two arrays that both have already been sorted to speed up the matching.

```js
const sorter = (a, b) => a > b
  ? 1
  : - 1

const a = [2, 3, 1]
const b = [3, 4, 2]

a.sort(sorter)
b.sort(sorter)

justDiff(a, b, sorter)
// The same result as above
```

### `asc` and `desc`

Built-in sorter to sort arrays in ascending or descending order.

## License

[MIT](LICENSE)
