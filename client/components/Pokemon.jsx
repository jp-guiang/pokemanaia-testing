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
      <div>
        <div
          key={poke.name}
          onMouseOver={handleHoverOn}
          onMouseOut={handleHoverOff}
          onFocus={() => void 0}
          onBlur={() => void 0}
        >
          <p key={poke.name}>{poke.name}</p>
          <img src={poke.sprites.front_default} alt={poke.name}></img>
        </div>
        {isHovering && (
          <div>
            {poke.stats.map((info) => {
              if (
                info.stat.name == 'attack' ||
                info.stat.name == 'defense' ||
                info.stat.name == 'hp'
              ) {
                return (
                  <p key={info.stat.name}>
                    <strong>
                      {info.stat.name.charAt(0).toUpperCase() +
                        info.stat.name.slice(1)}
                      :
                    </strong>{' '}
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
