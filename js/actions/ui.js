import * as TYPES from '../types/ui'

export function setUI(payload) {
  return {
    type: TYPES.SET_UI_VALUE,
    payload,
  }
}
