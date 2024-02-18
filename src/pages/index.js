import * as React from 'react'
import '../styles/global.css'

import InputGrid from '../components/InputGrid'
import Settings from '../components/Settings'
import WordList from '../components/WordList'

import { useLocalStorage } from '../hooks/useLocalStorage'

import { graphql } from 'gatsby'

// import dictJSON from '../data/dictionaries/Suomi-kotus.json'

const IndexPage = ({ data }) => {
  let baseURL = ''
  if (process.env.NODE_ENV === 'production') {
    baseURL = process.env.GATSBY_BASE_URL
  }
  //const [gridSize, setGridSize] = React.useState(4)
  const [gridSize, setGridSize] = useLocalStorage('gridSize', 4)
  const [gridValues, setGridValues] = React.useState(
    Array.from({ length: gridSize ** 2 }, () => '')
  )
  const [selectedWord, setSelectedWord] = React.useState(null)
  const [dictionary, setDictionary] = React.useState([])
  const listOfDicts = data.allFile.nodes
  const [dictionaryNameURL, setDictionaryNameURL] = useLocalStorage(
    'currentDictionary',
    listOfDicts[0]
  )

  const changeGridSize = (value) => {
    setGridSize(value)
    setGridValues(Array.from({ length: value * value }, () => ''))
    setSelectedWord(null)
  }

  React.useEffect(() => {
    const loadDictionary = () => {
      if (!dictionaryNameURL) return
      fetch(`${baseURL}${dictionaryNameURL.publicURL}`)
        .then((res) => res.json())
        .then((data) => {
          setDictionary(data)
        })
    }

    loadDictionary()
  }, [dictionaryNameURL, baseURL])

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2 sm:m-12">
        <section>
          <h1 className="text-center text-5xl my-12 text-slate-100 text-decoration: underline">
            Boggle Ratkaisin
          </h1>
          <Settings
            changeGridSize={changeGridSize}
            listOfDicts={listOfDicts}
            setDictionaryNameURL={setDictionaryNameURL}
            gridSize={gridSize}
            dictionaryNameURL={dictionaryNameURL}
          />
          <section className="block lg:flex justify-between my-12">
            <div className="lg:w-1/2 w-full text-xl px-4 lg:my-0 my-12 text-slate-100">
              <p>Valitse sanakirja ja pelilaudan koko.</p>
              <p>Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.</p>
            </div>
            <InputGrid
              gridValues={gridValues}
              setGridValues={setGridValues}
              selectedWord={selectedWord}
              setSelectedWord={setSelectedWord}
              gridSize={gridSize}
            />
          </section>
        </section>
        <WordList
          dictionary={dictionary}
          gridValues={gridValues}
          setSelectedWord={setSelectedWord}
          gridSize={gridSize}
        />
      </div>
    </main>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "dictionaries" }
        extension: { eq: "json" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        name
        publicURL
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Boggle Ratkaisin</title>
