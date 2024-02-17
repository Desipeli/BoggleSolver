import * as React from 'react'
const { indexToCoord } = require('../services/ArrayGraph')

const InputGrid = ({
  gridSize,
  gridValues,
  setGridValues,
  selectedWord,
  setSelectedWord,
}) => {
  const gridContainerRef = React.useRef(null)
  const inputRefs = React.useRef([])
  const [routeId, setRouteId] = React.useState(0)

  React.useEffect(() => {
    setRouteId(0)
  }, [selectedWord, gridValues])

  const handleRouteChange = (value) => {
    const newId = Number(routeId) + Number(value)
    if (newId < 0) {
      setRouteId(selectedWord?.routes.length - 1)
    } else if (newId >= selectedWord?.routes.length) {
      setRouteId(0)
    } else {
      setRouteId(newId)
    }
  }

  React.useEffect(() => {
    const gridContainer = gridContainerRef.current

    const mediaQuery = window.matchMedia('(max-width: 400px)')

    if (mediaQuery.matches) {
      console.log('smol')
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, minmax(0, 1fr))`
      gridContainer.style.width = `${gridSize * 2.5}rem`
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
    if (selectedWord?.routes[routeId]?.includes(`${coord[0]}${coord[1]}`)) {
      setSelectedWord(null)
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
    if (selectedWord?.routes[routeId]?.length === 0) return
    for (let i = 0; i < selectedWord?.routes[routeId]?.length; i++) {}
  }, [selectedWord])

  return (
    <div className="flex  w-full mx-auto" name="grid-and-buttons">
      <div className="sm:w-1/2 w-full mx-auto justify-items-center">
        <div
          ref={gridContainerRef}
          id="grid-container"
          name="grid-container"
          className={'grid gap-5 mx-auto justify-items-center'}
        >
          {Array.from({ length: gridSize ** 2 }, (_, index) => {
            const coord = indexToCoord(index, gridSize)
            const routeIndex = selectedWord?.routes[routeId]?.findIndex(
              (item) => item === `${coord[0]}${coord[1]}`
            )
            return (
              <div key={index} className="relative">
                <input
                  value={gridValues[index]}
                  ref={(r) => (inputRefs.current[index] = r)}
                  type="text"
                  className={`${selectedWord?.routes[routeId]?.includes(`${coord[0]}${coord[1]}`) ? (routeIndex === 0 ? 'bg-yellow-300 ' : 'bg-lime-300 ') : ''}xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field`}
                  onChange={handleInputChange(index)}
                  onKeyDown={handleInputKey(index)}
                ></input>
                {selectedWord?.routes[routeId]?.includes(
                  `${coord[0]}${coord[1]}`
                ) && (
                  <div className="absolute top-0 right-0 bg-black rounded-bl-full text-white font-medium text-sm p-1">
                    {routeIndex + 1}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {selectedWord && (
          <div className="flex justify-center items-center text-5xl">
            <button
              value={-1}
              onClick={(e) => handleRouteChange(e.target.value)}
            >
              &#8592;
            </button>
            <span className="text-xl text-white">
              {selectedWord.word} {routeId + 1}/{selectedWord?.routes.length}
            </span>
            <button
              value={1}
              onClick={(e) => handleRouteChange(e.target.value)}
            >
              &#8594;
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputGrid
