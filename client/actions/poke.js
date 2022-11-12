export const ADD_POKE = 'ADD_POKE'
export const DEL_POKE = 'DEL_POKE'

export function addPoke(poke) {
  return {
    type: ADD_POKE,
    payload: poke,
  }
}

export function delPoke(index) {
  return {
    type: DEL_POKE,
    payload: index,
  }
}
