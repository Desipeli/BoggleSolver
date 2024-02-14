import * as React from 'react'
const { searchWords } = require('../services/SearchWords')
const { convertArrayTo2D } = require('../services/ArrayGraph')

const WordList = ({ dictionary, gridValues, rowCount, colCount }) => {
  const [foundWords, setFoundWords] = React.useState([])

  const handleSearch = () => {
    for (let i = 0; i < gridValues.length; i++) {
      if (gridValues[i].length === 0) {
        alert('Täytä taulukko')
        return
      }
    }

    const array2D = convertArrayTo2D(gridValues, rowCount, colCount)
    const result = searchWords(array2D, dictionary) // result = [word, coordinate, coordinate,...]
    if (result.length > 0) {
      organizeFoundWords(result)
    }
  }

  const organizeFoundWords = (words) => {
    const sortedByLength = words.sort(
      (a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0], 'fi')
    )
    setFoundWords(sortedByLength)
  }

  return (
    <>
      <section className="flex justify-center mx-2">
        <button
          name="search-words-btn"
          className="border rounded-lg min-h-12 w-80 bg-slate-100"
          onClick={handleSearch}
        >
          Etsi sanat
        </button>
      </section>
      {foundWords.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </>
  )
}

export default WordList
