import { fork, all } from 'redux-saga/effects'
import { connectionHandlerSaga } from './api'

export default function* () {
  yield all([
    fork(connectionHandlerSaga),
  ])
}
