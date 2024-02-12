import * as React from 'react'

const Settings = ({ rowCount, colCount, setRowCount, setColCount }) => {
  return (
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
          value={rowCount}
          onChange={(e) => setRowCount(e.target.value)}
          className="min-h-16 min-w-12 max-w-24 rounded-lg text-2xl font-bold text-center"
        ></input>
        <span className="text-slate-100 mx-6">X</span>
        <input
          id="col-count"
          value={colCount}
          onChange={(e) => setColCount(e.target.value)}
          className="min-h-16 min-w-12 max-w-24 rounded-lg text-2xl font-bold text-center"
        ></input>
      </div>
    </section>
  )
}

export default Settings
