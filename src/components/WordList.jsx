import * as React from 'react'

const WordList = (dictionary) => {
  return (
    <section className="flex justify-center mx-2">
      <button
        name="search-words-btn"
        className="border rounded-lg min-h-12 w-80 bg-slate-100"
      >
        Etsi sanat
      </button>
    </section>
  )
}

export default WordList
