import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import AppWrapper from './containers/AppWrapper'

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
        </AppWrapper>
      </Provider>
    )
  }
}
