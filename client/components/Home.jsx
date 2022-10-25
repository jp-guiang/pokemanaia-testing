import React, { useState, useEffect } from 'react'
import { getPokemon } from '../apis/apiClient'
import Pokemon from './Pokemon'

export default function Home() {
  const [pokeList, setList] = useState([])
  const [apiError, setError] = useState(false)

  useEffect(() => {
    getPokemon()
      .then((list) => {
        setList(list.results)
        setError(false)
        return list
      })

      .catch((err) => {
        console.error(err)
        setError(true)
      })
  }, [])

  return apiError ? (
    <h1>Could not load Pokemon from PokeApi</h1>
  ) : (
    <>
      <h1>Choose your Pokémon!</h1>
      <h2>Test</h2>

      {pokeList.map((pokemon) => {
        return <Pokemon key={pokemon.name} poke={pokemon} />
      })}
    </>
  )
}
