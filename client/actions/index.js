import { getPokemon } from '../apis/apiClient'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getPokemon().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}
