const test = require('ava')
const {
  diff, justDiff, asc, desc
} = require('../src')

const CASES = [
  [[2, 3, 1], [3, 4, 2], [2, 3], [4], [1]],
  [[0, 0, 0, 1], [2, 2, 3, 3], [], [2, 2, 3, 3], [0, 0, 0, 1]]
]

const createRunner = (prefix, d = diff, sorter) =>
  ([a, b, unchanged, added, deleted]) => {
    test(`diff(${a}, ${b}, ${prefix})`, t => {
      if (sorter) {
        a.sort(sorter)
        b.sort(sorter)
      }

      const result = sorter
        ? d(a, b, sorter)
        : d(a, b)

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

CASES.forEach(createRunner('justDiff, asc', justDiff, asc))
CASES.forEach(createRunner('justDiff, desc', justDiff, desc))
CASES.forEach(createRunner('diff', diff))
