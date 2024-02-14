import * as React from 'react'

const Settings = ({ setRowCount, setColCount, setGridValues }) => {
  const handleSelect = (value) => {
    setColCount(value)
    setRowCount(value)
    setGridValues(Array.from({ length: value * value }, () => ''))
  }

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
        defaultValue={5}
        className="w-5/12 border border-gray-300 rounded-lg bg-slate-100 focus:border-green-500 text-xl  min-h-12 hover:shadow-green-500 shadow-md"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value={5}>5 x 5</option>
        <option value={4}>4 x 4</option>
      </select>
    </section>
  )
}

export default Settings
