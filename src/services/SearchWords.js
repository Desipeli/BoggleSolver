/**
 *
 * @param {Array} graph 2D array
 * @param {Array} dictionary list of words
 */
const searchWords = (graph, dictionary) => {
  let found = []
  for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[0].length; col++) {
      const result = dfs(graph, row, col, [], [], dictionary)
      if (result.length > 0) {
        found = [...found, ...result]
      }
    }
  }
  return found.sort((a, b) => a[0].localeCompare(b[0]))
}

const directions = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
]

/**
 * @param {array} graph 2D array
 * @param {number} row row index
 *  @param {number} colI column index
 *  @param {array} visitedC array of visited coordinates 'row,col'
 *  @param {array} visitedL array of visited letters*/
const dfs = (graph, rowI, colI, visitedC, visitedL, dictionary) => {
  const currentNodeStr = `${rowI}${colI}`
  if (visitedC.includes(currentNodeStr)) {
    return []
  }
  visitedC.push(currentNodeStr)
  visitedL.push(graph[rowI][colI])
  // console.log('dfs', 'node', currentNodeStr, visitedC, visitedL)
  let found = []

  const binResult = binarySearchDict(visitedL.join(''), dictionary)
  // console.log('bin', binResult)
  if (binResult[0] === true) {
    found.push([visitedL.join(''), ...visitedC])
  } else if (binResult[1] === false) {
    // console.log('Älä ees yritä')
    visitedC.pop()
    visitedL.pop()
    return []
  }

  // console.log('node', currentNodeStr, 'before new directions, found', found)

  for (let i = 0; i < directions.length; i++) {
    const nextNode = [rowI + directions[i][0], colI + directions[i][1]]
    // console.log('current node', currentNodeStr, 'nextnode', nextNode)
    if (
      nextNode[0] < 0 ||
      nextNode[1] < 0 ||
      nextNode[0] >= graph.length ||
      nextNode[1] >= graph[0].length
    ) {
      continue
    }

    const result = dfs(
      graph,
      nextNode[0],
      nextNode[1],
      visitedC,
      visitedL,
      dictionary
    )
    if (result.length > 0) {
      found = [...found, ...result]
    }
  }

  // console.log('node', currentNodeStr, 'after new directions, found', found)

  visitedC.pop()
  visitedL.pop()
  return found
}

const binarySearchDict = (word, dictionary) => {
  let start = 0
  let end = dictionary.length
  let beginsWith = false

  while (true) {
    // let quotient = (end-start / 2) | 0;
    const middlepoint = start + Math.floor((end - start) / 2)
    // console.log(start, middlepoint, end, dictionary[middlepoint])

    const comparison = word.localeCompare(dictionary[middlepoint], 'fi')
    if (comparison === 0) {
      return [true, middlepoint]
    }
    if (
      middlepoint >= 0 &&
      middlepoint <= dictionary.length - 1 &&
      dictionary[middlepoint].startsWith(word)
    ) {
      beginsWith = true // word can be found later
    }
    if (end - start <= 0) {
      return [false, beginsWith]
    }
    if (comparison === 1) {
      start = middlepoint + 1
    }
    if (comparison === -1) {
      end = middlepoint - 1
    }
  }
}

module.exports = {
  searchWords,
  binarySearchDict,
  dfs,
}
