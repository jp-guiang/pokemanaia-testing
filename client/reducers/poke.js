import { ADD_POKE, DEL_POKE } from '../actions/poke'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_POKE:
      return [...state, payload]
    case DEL_POKE:
      return state.filter((poke, index) => index !== payload)
    default:
      return state
  }
}

export default reducer
