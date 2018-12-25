import * as TYPES from '../types/ui'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_UI_VALUE: {
      let name = action.payload.name
      if (typeof name === 'undefined') {
        console.warn(action.type, 'undefined name was provided, with the following payload: ', action.payload)
        name = `${action.type}_undefined_name_value`
      }
      return {
        ...state,
        [name]: action.payload.value,
      }
    }
    default:
      return state
  }
}
