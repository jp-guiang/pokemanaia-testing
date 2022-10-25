import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'
import Pokemon from './Pokemon'

export default function Home() {
  const [pokeList, setList] = useState([])
  const [apiError, setError] = useState(false)
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemon()
      .then((list) => {
        setList(list.results)
        setError(false)
        return list.results
      })
      .then((namesList) => {
        const pokeInfo = namesList.map((mon) => {
          return getPokeInfo(mon.name)
        })
        return Promise.all(pokeInfo)
      })
      .then((pokeData) => {
        setPokedex(pokeData)
      })

      .catch((err) => {
        console.error(err)
        setError(true)
      })
  }, [])

  console.log(pokedex)

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
