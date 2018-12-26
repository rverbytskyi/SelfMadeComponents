import { connect } from 'react-redux'
import { setUI } from '../../actions/ui'

import ScreenWrapper from './ScreenWrapper.component'
import { disconnected, connected } from '../../actions/network'

function mapStateToProps(state) {
  const { UI = {} } = state
  const { width, height } = UI
  return {
    width,
    height,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setWidth: (value) => {
      dispatch(setUI({ name: 'width', value }))
    },
    setHeight: (value) => {
      dispatch(setUI({ name: 'height', value }))
    },
    disconnected: () => {
      dispatch(disconnected())
    },
    connected: () => {
      dispatch(connected())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenWrapper)
