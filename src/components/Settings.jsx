import * as React from 'react'

const Settings = ({ changeGridSize }) => {
  return (
    <section className="flex justify-between">
      <select
        name="language"
        id="language"
        className="w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md"
      >
        <option value="fin">Suomi</option>
      </select>
      <select
        name="grid-size-select"
        id="grid-size-select"
        defaultValue={4}
        className="w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md"
        onChange={(e) => changeGridSize(e.target.value)}
      >
        <option value={4}>4 x 4</option>
        <option value={5}>5 x 5</option>
      </select>
    </section>
  )
}

export default Settings
