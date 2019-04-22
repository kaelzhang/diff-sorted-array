const test = require('ava')
const {diff, asc, desc} = require('../src')

const CASES = [
  [[2, 3, 1], [3, 4, 2], [2, 3], [4], [1]],
  [[0, 0, 0, 1], [2, 2, 3, 3], [], [2, 2, 3, 3], [0, 0, 0, 1]]
]

const createRunner = (prefix, sorter) =>
  ([a, b, unchanged, added, deleted]) => {
    test(`diff(${a}, ${b}, ${prefix})`, t => {
      a.sort(sorter)
      b.sort(sorter)

      const result = diff(a, b, sorter)
      result.unchanged.sort()
      result.added.sort()
      result.deleted.sort()

      unchanged.sort()
      added.sort()
      deleted.sort()

      t.deepEqual(result, {
        unchanged,
        added,
        deleted
      })
    })
  }

CASES.forEach(createRunner('asc', asc))
CASES.forEach(createRunner('desc', desc))
