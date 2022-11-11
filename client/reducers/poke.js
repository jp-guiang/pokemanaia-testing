import { ADD_POKE } from '../actions/poke'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_POKE:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
