import * as React from 'react'
import '../styles/global.css'

import InputGrid from '../components/InputGrid'
import Settings from '../components/Settings'
import WordList from '../components/WordList'
import { graphql } from 'gatsby'

// import dictJSON from '../data/dictionaries/Suomi-kotus.json'

const IndexPage = ({ data }) => {
  const [rowCount, setRowCount] = React.useState(4)
  const [colCount, setColCount] = React.useState(4)
  const [gridSize, setGridSize] = React.useState(4)
  const [gridValues, setGridValues] = React.useState(
    Array.from({ length: rowCount * colCount }, () => '')
  )
  const [highlightedRoute, setHighlightedRoute] = React.useState([])

  const [dictionary, setDictionary] = React.useState([])
  const listOfDicts = data.allFile.nodes
  const [dictionaryNameURL, setDictionaryNameURL] = React.useState(
    listOfDicts[0]
  )

  const changeGridSize = (value) => {
    setGridSize(value)
    setGridValues(Array.from({ length: value * value }, () => ''))
    setHighlightedRoute([])
  }

  React.useEffect(() => {
    if (!dictionaryNameURL) return
    fetch(`${dictionaryNameURL.publicURL}`)
      .then((res) => res.json())
      .then((data) => {
        setDictionary(data.words)
      })
  }, [dictionaryNameURL])

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2 sm:m-12">
        <section>
          <h1 className="text-center text-5xl my-12 text-slate-100 text-decoration: underline">
            Boggle Ratkaisin
          </h1>
          <Settings changeGridSize={changeGridSize} listOfDicts={listOfDicts} />
          <section className="block lg:flex justify-between my-12">
            <div className="lg:w-1/2 w-full text-xl px-4 lg:my-0 my-12 text-slate-100">
              <p>Valitse kieli ja pelilaudan koko.</p>
              <p>Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.</p>
            </div>
            <InputGrid
              gridValues={gridValues}
              setGridValues={setGridValues}
              highlightedRoute={highlightedRoute}
              setHighlightedRoute={setHighlightedRoute}
              gridSize={gridSize}
            />
          </section>
        </section>
        <WordList
          dictionary={dictionary}
          gridValues={gridValues}
          setHighlightedRoute={setHighlightedRoute}
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

export const Head = () => <title>Home Page</title>
