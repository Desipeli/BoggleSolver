import * as React from 'react'
const { indexToCoord } = require('../services/ArrayGraph')

const InputGrid = ({
  gridSize,
  gridValues,
  setGridValues,
  highlightedRoutes,
  setHighlightedRoutes,
}) => {
  const gridContainerRef = React.useRef(null)
  const inputRefs = React.useRef([])

  React.useEffect(() => {
    const gridContainer = gridContainerRef.current

    const mediaQuery = window.matchMedia('(max-width: 400px)')

    if (mediaQuery.matches) {
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, minmax(0, 1fr))`
      gridContainer.style.width = `${gridSize * 3}rem`
    } else {
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, minmax(0, 1fr))`
      gridContainer.style.width = `${gridSize * 4}rem`
    }
  }, [gridSize])

  const handleInputKey = (index) => (event) => {
    if (['Backspace'].includes(event.key) && index > 0) {
      if (inputRefs.current[index].value.length === 0) {
        const prevInput = inputRefs.current[index - 1]
        prevInput.focus()
        prevInput.selectionStart = prevInput.value.length
        prevInput.selectionEnd = prevInput.value.length
      }
    }
    if (['Delete'].includes(event.key) && index < gridSize ** 2 - 1) {
      if (inputRefs.current[index].value.length === 0) {
        const nextInput = inputRefs.current[index + 1]
        nextInput.focus()
        nextInput.selectionStart = 0
        nextInput.selectionEnd = 0
      }
    }
  }

  const handleInputChange = (index) => (event) => {
    const value = event.target.value
    const coord = indexToCoord(index, gridSize)
    if (highlightedRoutes[0]?.includes(`${coord[0]}${coord[1]}`)) {
      setHighlightedRoutes([])
    }

    const newGrid = [...gridValues]
    newGrid[index] = value.toLowerCase()
    setGridValues(newGrid)
    if (value.length > 0) {
      if (
        index < inputRefs.current.length - 1 &&
        inputRefs.current[index + 1] !== null
      ) {
        inputRefs.current[index + 1].focus()
      }
      if (index === gridSize ** 2 - 1) {
        document.getElementById('search-words-btn').focus()
      }
    }
  }

  React.useEffect(() => {
    if (highlightedRoutes[0]?.length === 0) return
    for (let i = 0; i < highlightedRoutes[0]?.length; i++) {}
  }, [highlightedRoutes])

  return (
    <div
      ref={gridContainerRef}
      id="grid-container"
      name="grid-container"
      className={`grid gap-5 lg:w-1/2 xs:max-w-lg w-full mx-auto justify-items-center`}
    >
      {Array.from({ length: gridSize ** 2 }, (_, index) => {
        const coord = indexToCoord(index, gridSize)
        const routeIndex = highlightedRoutes[0]?.findIndex(
          (item) => item === `${coord[0]}${coord[1]}`
        )
        return (
          <div key={index} className="relative">
            <input
              value={gridValues[index]}
              ref={(r) => (inputRefs.current[index] = r)}
              type="text"
              className={`${highlightedRoutes[0]?.includes(`${coord[0]}${coord[1]}`) ? (routeIndex === 0 ? 'bg-yellow-300 ' : 'bg-lime-300 ') : ''}xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field`}
              onChange={handleInputChange(index)}
              onKeyDown={handleInputKey(index)}
            ></input>
            {highlightedRoutes[0]?.includes(`${coord[0]}${coord[1]}`) && (
              <div className="absolute top-0 right-0 bg-black rounded-bl-full text-white font-medium text-sm p-1">
                {routeIndex + 1}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default InputGrid
