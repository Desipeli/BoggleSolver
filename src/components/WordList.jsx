import * as React from 'react'
import WordInfo from './WordInfo'
const { searchWords } = require('../services/SearchWords')
const { convertArrayTo2D } = require('../services/ArrayGraph')

const WordList = ({
  dictionary,
  gridValues,
  rowCount,
  colCount,
  setHighlightedRoute,
}) => {
  const [wordRoutes, setWordRoutes] = React.useState({})
  const [findError, setFindError] = React.useState('')

  const handleSearch = () => {
    for (let i = 0; i < gridValues.length; i++) {
      if (gridValues[i].length === 0) {
        setFindError('Täytä taulukko')
        setWordRoutes({})
        return
      }
    }

    setFindError('')

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
    const newWordRoutes = {}
    for (let i = 0; i < sortedByLength.length; i++) {
      if (!(sortedByLength[i][0] in newWordRoutes)) {
        newWordRoutes[sortedByLength[i][0]] = [sortedByLength[i].splice(1)]
      } else {
        newWordRoutes[sortedByLength[i][0]].push(sortedByLength[i].splice(1))
      }
    }
    setWordRoutes(newWordRoutes)
  }

  return (
    <>
      <section className="flex justify-center mx-2">
        <div>
          <p className="text-center my-2 text-red-500 text-xl" id="find-error">
            {findError}
          </p>
          <button
            name="search-words-btn"
            className="border rounded-lg min-h-12 w-80 bg-slate-100"
            onClick={handleSearch}
          >
            Etsi sanat
          </button>
        </div>
      </section>
      <section className="grid gap-2 grid-cols-1 md:grid-cols-3 xs:grid-cols-2 justify-items-center text-2xl text-slate-100 my-4">
        {Object.keys(wordRoutes)
          .sort((a, b) => b.length - a.length || a.localeCompare(b, 'fi'))
          .map((word, i) => (
            <WordInfo
              key={i}
              word={word}
              routes={wordRoutes[word]}
              setHighlightedRoute={setHighlightedRoute}
            />
          ))}
      </section>
    </>
  )
}

export default WordList
