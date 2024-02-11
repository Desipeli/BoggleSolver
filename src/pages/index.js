import * as React from 'react'
import '../styles/global.css'

const IndexPage = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <section className="m-2 sm:m-12">
        <h1 className="text-center text-5xl my-12 text-slate-100 text-decoration: underline">
          Boggle Ratkaisin
        </h1>
        <section className="sm:flex block justify-between">
          <select
            name="language"
            id="language"
            className="border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl w-full sm:w-1/2 min-h-16 hover:shadow-green-500 shadow-md"
          >
            <option value="fin">Suomi</option>
          </select>
          <div className="my-12 sm:my-0">
            <input
              id="row-count"
              value={5}
              className="min-h-16 min-w-12 max-w-24 rounded-lg text-2xl font-bold text-center"
            ></input>
            <span className="text-slate-100 mx-6">X</span>
            <input
              id="col-count"
              value={5}
              className="min-h-16 min-w-12 max-w-24 rounded-lg text-2xl font-bold text-center"
            ></input>
          </div>
        </section>
        <section className="block lg:flex justify-between my-12">
          <div
            name="grid-container"
            className="grid grid-cols-5 gap-5 lg:w-1/2 min-w-84 max-w-lg mx-auto justify-items-center"
          >
            {Array.from({ length: 5 * 5 }, (_, index) => (
              <input
                key={index}
                type="text"
                className="border border-gray-300 w-14 h-14 rounded-md text-center"
              ></input>
            ))}
          </div>
          <div className="text-xl px-4 lg:my-0 my-12 text-slate-100">
            <p>Valitse kieli ja pelilaudan koko.</p>
            <p>Kirjaa pelilaudan nopissa näkyvät kirjaimet taulukkoon.</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
