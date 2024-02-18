import * as React from 'react'

const WordInfo = ({ word, routes, setSelectedWord, selectedWord }) => {
  const handleClick = () => {
    setSelectedWord({ word: word, routes: routes })
  }

  return (
    <div className={`text-center`}>
      <span
        className={`${selectedWord && selectedWord.word === word ? 'border rounded-lg ' : ''}cursor-pointer text-center`}
        onClick={handleClick}
      >
        {word}
      </span>
    </div>
  )
}

export default WordInfo
