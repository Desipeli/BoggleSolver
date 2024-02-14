import * as React from 'react'

const WordInfo = ({ word, routes }) => {
  const [show, setShow] = React.useState(false)

  const handleWordClick = () => {
    setShow(!show)
  }

  return (
    <div>
      <span className="cursor-pointer" onClick={handleWordClick}>
        {word}
      </span>
      {show &&
        routes.map((route, routeI) => (
          <div key={routeI}>
            <p className="cursor-pointer">{route.toString()}</p>
          </div>
        ))}
    </div>
  )
}

export default WordInfo
