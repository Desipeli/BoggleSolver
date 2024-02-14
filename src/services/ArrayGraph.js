const convertArrayTo2D = (array, rowCount, colCount) => {
  const graph = []
  for (let rowI = 0; rowI < rowCount; rowI++) {
    const new_row = []
    for (let colI = 0; colI < colCount; colI++) {
      new_row.push(array[rowI * colCount + colI])
    }
    graph.push(new_row)
  }

  return graph
}

const coordToIndex = (rowIndex, colIndex, colCount) => {
  return rowIndex * colCount + colIndex
}

const indexToCoord = (index, colCount) => {
  const row = Math.floor(index / colCount)
  const col = index % colCount
  return [row, col]
}

module.exports = {
  convertArrayTo2D,
  coordToIndex,
  indexToCoord,
}
