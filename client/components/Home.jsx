import React, { useState, useEffect } from 'react'
import { getPokemon } from '../apis/apiClient'
import Pokemon from './Pokemon'

export default function Home() {
  const [pokeList, setList] = useState([])

  useEffect(() => {
    getPokemon()
      .then((list) => {
        setList(list.results)
        return list
      })

      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>Choose your Pokémon!</h1>
      <h2>Test</h2>

      {pokeList.map((pokemon) => {
        return <Pokemon key={pokemon.name} poke={pokemon} />
      })}
    </>
  )
}
