const convertArrayTo2D = (array, gridSize) => {
  const graph = []
  for (let rowI = 0; rowI < gridSize; rowI++) {
    const new_row = []
    for (let colI = 0; colI < gridSize; colI++) {
      new_row.push(array[rowI * gridSize + colI])
    }
    graph.push(new_row)
  }

  return graph
}

const indexToCoord = (index, gridSize) => {
  const row = Math.floor(index / gridSize)
  const col = index % gridSize
  return [row, col]
}

module.exports = {
  convertArrayTo2D,
  indexToCoord,
}
