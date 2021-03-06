const justDiff = (o, n, sorter) => {
  const nl = n.length
  let ni = 0
  let nv

  const ol = o.length
  let oi = 0
  let ov

  const unchanged = []
  const added = []
  const deleted = []

  while (ni < nl || oi < ol) {
    nv = n[ni]
    ov = o[oi]

    if (nv === ov) {
      unchanged.push(nv)

      ni ++
      oi ++

    // THen, there is at least one deleted key
    //////////////////////////////////////////////////
    } else if (
      // old key reached the end
      oi === ol
      // old key is less than new key -> nv is new
      || sorter(ov, nv) > 0
    ) {
      added.push(nv)

      ni ++

    // -> ov is deleted
    } else {
      deleted.push(ov)

      oi ++
    }
  }

  return {
    unchanged,
    added,
    deleted
  }
}

const asc = (a, b) => a > b ? 1 : - 1
const desc = (a, b) => a < b ? 1 : - 1

const diff = (a, b) => {
  a.sort(asc)
  b.sort(asc)

  return justDiff(a, b, asc)
}

module.exports = {
  justDiff,
  asc,
  desc,
  diff
}
