import React from 'react'
import ScreenWrapper from './ScreenWrapper.container'

export default function (Component) {
  return function () {
    return (
      <ScreenWrapper>
        <Component />
      </ScreenWrapper>
    )
  }
}
