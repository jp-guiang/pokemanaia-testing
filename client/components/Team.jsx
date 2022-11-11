import React from 'react'
import { useSelector } from 'react-redux'

export default function Team() {
  const team = useSelector((state) => state.poke)

  return (
    <>
      <div className="poke-list">
        {team.map((poke, index) => {
          return (
            <div key={poke.name + index}>
              <img src={poke.sprites.front_default} alt={poke.name}></img>
            </div>
          )
        })}
      </div>
    </>
  )
}
