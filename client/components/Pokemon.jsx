import React, { useState } from 'react'

export default function Pokemon({ poke }) {
  return (
    <>
      <div key={poke.name}>
        <p key={poke.name}>{poke.name}</p>
        <img src={poke.sprites.front_default} alt={poke.name}></img>
      </div>
    </>
  )
}
