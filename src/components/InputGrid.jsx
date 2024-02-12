import * as React from 'react'

const InputGrid = ({ rowCount, colCount }) => {
  const gridContainerRef = React.useRef(null)
  const inputRefs = React.useRef([])

  const letters = 'abcdefghijklmnopwrstuvwxyzåäö'

  React.useEffect(() => {
    const gridContainer = gridContainerRef.current

    gridContainer.style.gridTemplateColumns = `repeat(${colCount}, minmax(0, 1fr))`
    gridContainer.style.width = `${colCount * 5}rem`
  }, [colCount])

  const handleInputKey = (index) => (event) => {
    if (['Backspace', 'Delete'].includes(event.key) && index > 0) {
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
      className={`grid gap-5 lg:w-1/2 min-w-84 max-w-lg mx-auto justify-items-center`}
    >
      {Array.from({ length: rowCount * colCount }, (_, index) => (
        <input
          key={index}
          ref={(r) => (inputRefs.current[index] = r)}
          type="text"
          className="w-14 h-14 rounded-md text-center uppercase"
          onChange={handleInputChange(index)}
          onKeyDown={handleInputKey(index)}
        ></input>
      ))}
    </div>
  )
}

export default InputGrid
