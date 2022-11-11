import React, { useState } from 'react'

export default function Pokemon({ poke }) {
  const [isHovering, setHovering] = useState(false)

  const handleHoverOn = () => {
    setHovering(true)
  }

  const handleHoverOff = () => {
    setHovering(false)
  }

  return (
    <>
      <div
        id="test"
        key={poke.name}
        onMouseOver={handleHoverOn}
        onMouseOut={handleHoverOff}
        onFocus={() => void 0}
        onBlur={() => void 0}
      >
        <div>
          <p key={poke.name}>{poke.name}</p>
          <img src={poke.sprites.front_default} alt={poke.name}></img>
        </div>
        {isHovering && (
          <div className="stats">
            {poke.stats.map((info) => {
              if (
                info.stat.name == 'attack' ||
                info.stat.name == 'defense' ||
                info.stat.name == 'hp'
              ) {
                return (
                  <p key={info.stat.name}>
                    <strong>{info.stat.name.toUpperCase()}:</strong>{' '}
                    {info.base_stat}
                  </p>
                )
              }
            })}
          </div>
        )}
      </div>
    </>
  )
}
