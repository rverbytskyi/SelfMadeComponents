import { DISCONNECTED, IS_CONNECTED } from '../types/network'

export function connected() {
  return {
    type: IS_CONNECTED,
  }
}

export function disconnected() {
  return {
    type: DISCONNECTED,
  }
}
