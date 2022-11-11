import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'
import { addPoke } from '../actions/poke'
import Pokemon from './Pokemon'
import Team from './Team'

export default function Home() {
  const [apiError, setError] = useState(false)
  const [pokedex, setPokedex] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemon()
      .then((list) => {
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

  function selectPoke(poke) {
    console.log(poke.name)
    dispatch(addPoke(poke))
  }

  return apiError ? (
    <h1>Could not load Pokemon from PokeApi</h1>
  ) : (
    <>
      <div className="home-display">
        <h1>Choose your Pokémon!</h1>
        <h2>Your Team</h2>
        <Team />
        <div className="poke-list">
          {pokedex.map((pokemon) => {
            return (
              <button
                className="poke-button"
                key={pokemon.name}
                onClick={() => selectPoke(pokemon)}
              >
                <Pokemon poke={pokemon} />
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
