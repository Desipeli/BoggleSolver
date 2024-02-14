import * as React from 'react'

const WordInfo = ({ word, routes, setHighlightedRoute }) => {
  const [show, setShow] = React.useState(false)

  const handleWordClick = () => {
    setShow(!show)
  }

  return (
    <div className={`${show ? 'my-4 ' : ''} text-center`}>
      <span className="cursor-pointer text-center" onClick={handleWordClick}>
        {word}
      </span>
      {show &&
        routes.map((route, routeI) => (
          <div key={routeI}>
            <p
              onClick={() => setHighlightedRoute(route)}
              className="cursor-pointer"
            >
              {route.toString()}
            </p>
          </div>
        ))}
    </div>
  )
}

export default WordInfo
