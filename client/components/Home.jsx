import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'
import { useDispatch, useSelector } from 'react-redux'
import { addPoke } from '../actions/poke'
import Pokemon from './Pokemon'
import Team from './Team'

export default function Home() {
  const [apiError, setError] = useState(false)
  const [pokedex, setPokedex] = useState([])
  const dispatch = useDispatch()
  const team = useSelector((state) => state.poke)

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
    if (team.length < 6) {
      dispatch(addPoke(poke))
    }
  }

  return apiError ? (
    <h1>Could not load Pokemon from PokeApi</h1>
  ) : (
    <>
      <div className="home-display">
        <h1>Choose your Pokémon!</h1>
        <div className="select-team">
          <div className="team">
            <Team />
          </div>
          <p>Choose your team</p>
        </div>
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
