import { SET_POKE } from '../actions/poke'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_POKE:
      return payload
    default:
      return state
  }
}

export default reducer
