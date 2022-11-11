import { getPokemon } from '../apis/apiClient'

export const ADD_POKE = 'ADD_POKE'

export function addPoke(poke) {
  return {
    type: ADD_POKE,
    payload: poke,
  }
}
