import { getPokemon } from '../apis/apiClient'

export const SET_POKE = 'SET_POKE'

export function setPoke(poke) {
  console.log('action', poke)
  return {
    type: SET_POKE,
    payload: poke,
  }
}
