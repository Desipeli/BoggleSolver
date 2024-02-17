import * as React from 'react'

const WordInfo = ({ word, routes, setSelectedWord }) => {
  const handleClick = () => {
    setSelectedWord({ word: word, routes: routes })
  }

  return (
    <div className={`text-center`}>
      <span className="cursor-pointer text-center" onClick={handleClick}>
        {word}
      </span>
    </div>
  )
}

export default WordInfo
