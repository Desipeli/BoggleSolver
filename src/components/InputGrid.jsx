import * as React from 'react'
const { indexToCoord } = require('../services/ArrayGraph')

const InputGrid = ({
  rowCount,
  colCount,
  gridValues,
  setGridValues,
  highlightedRoute,
}) => {
  const gridContainerRef = React.useRef(null)
  const inputRefs = React.useRef([])

  React.useEffect(() => {
    const gridContainer = gridContainerRef.current

    const mediaQuery = window.matchMedia('(max-width: 400px)')

    if (mediaQuery.matches) {
      gridContainer.style.gridTemplateColumns = `repeat(${colCount}, minmax(0, 1fr))`
      gridContainer.style.width = `${colCount * 3}rem`
    } else {
      gridContainer.style.gridTemplateColumns = `repeat(${colCount}, minmax(0, 1fr))`
      gridContainer.style.width = `${colCount * 4}rem`
    }
  }, [colCount])

  const handleInputKey = (index) => (event) => {
    if (['Backspace'].includes(event.key) && index > 0) {
      if (inputRefs.current[index].value.length === 0) {
        const prevInput = inputRefs.current[index - 1]
        prevInput.focus()
        prevInput.selectionStart = prevInput.value.length
        prevInput.selectionEnd = prevInput.value.length
      }
    }
    if (['Delete'].includes(event.key) && index < rowCount * colCount - 1) {
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
    }
  }

  React.useEffect(() => {
    if (highlightedRoute.length === 0) return
    for (let i = 0; i < highlightedRoute.length; i++) {}
  }, [highlightedRoute])

  console.log('inputsduh', highlightedRoute)

  return (
    <div
      ref={gridContainerRef}
      id="grid-container"
      name="grid-container"
      className={`grid gap-5 lg:w-1/2 xs:max-w-lg w-full mx-auto justify-items-center`}
    >
      {Array.from({ length: rowCount * colCount }, (_, index) => (
        <div key={index} className="relative">
          <input
            value={gridValues[index]}
            ref={(r) => (inputRefs.current[index] = r)}
            type="text"
            className={`${highlightedRoute.includes(`${indexToCoord(index, colCount)[0]}${indexToCoord(index, colCount)[1]}`) ? 'bg-lime-300 ' : ''}xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field`}
            onChange={handleInputChange(index)}
            onKeyDown={handleInputKey(index)}
          ></input>
          {highlightedRoute.includes(
            `${indexToCoord(index, colCount)[0]}${indexToCoord(index, colCount)[1]}`
          ) && (
            <div
              className="absolute top-0 right-0 bg-black rounded-bl-full text-white font-medium text-sm p-1"
              // style={{
              //   position: 'absolute',
              //   top: '0',
              //   right: '0',
              //   backgroundColor: 'white',
              //   borderRadius: '50%',
              //   padding: '2px 6px',
              //   fontSize: '10px',
              // }}
            >
              {highlightedRoute.findIndex(
                (item) =>
                  item ===
                  `${indexToCoord(index, colCount)[0]}${indexToCoord(index, colCount)[1]}`
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default InputGrid
