import * as React from 'react'
import '../styles/global.css'

import InputGrid from '../components/InputGrid'
import Settings from '../components/Settings'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  console.log(data)
  const [rowCount, setRowCount] = React.useState(5)
  const [colCount, setColCount] = React.useState(5)

  return (
    <main className="max-w-6xl mx-auto">
      <section className="m-2 sm:m-12">
        <h1 className="text-center text-5xl my-12 text-slate-100 text-decoration: underline">
          Boggle Ratkaisin
        </h1>
        <Settings
          colCount={colCount}
          rowCount={rowCount}
          setColCount={setColCount}
          setRowCount={setRowCount}
        />
        <section className="block lg:flex justify-between my-12">
          <div className="text-xl px-4 lg:my-0 my-12 text-slate-100">
            <p>Valitse kieli ja pelilaudan koko.</p>
            <p>Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.</p>
          </div>
          <InputGrid rowCount={rowCount} colCount={colCount} />
        </section>
      </section>
    </main>
  )
}

export const query = graphql`
  query MunQueery {
    allFile {
      nodes {
        dir
        modifiedTime
        name
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
