import * as React from 'react'

const InputGrid = ({ rowCount, colCount, gridValues, setGridValues }) => {
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
  }

  const handleInputChange = (index) => (event) => {
    const value = event.target.value
    const newGrid = [...gridValues]
    newGrid[index] = value.toLowerCase()
    setGridValues(newGrid)
    if (value.length > 0) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  return (
    <div
      ref={gridContainerRef}
      id="grid-container"
      name="grid-container"
      className={`grid gap-5 lg:w-1/2 max-w-56 xs:max-w-lg w-full mx-auto justify-items-center`}
    >
      {Array.from({ length: rowCount * colCount }, (_, index) => (
        <input
          key={index}
          ref={(r) => (inputRefs.current[index] = r)}
          type="text"
          className="xs:w-14 xs:h-14 w-10 h-10 font-bold rounded-md text-center uppercase grid-input-field"
          onChange={handleInputChange(index)}
          onKeyDown={handleInputKey(index)}
        ></input>
      ))}
    </div>
  )
}

export default InputGrid
