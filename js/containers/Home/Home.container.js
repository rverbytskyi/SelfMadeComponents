import { connect } from 'react-redux'

import HomeComponent from './Home.component'

function mapStateToProps(state) {
  const { UI = {} } = state
  const { width, height } = UI
  return {
    width,
    height,
  }
}

export default connect(mapStateToProps)(HomeComponent)
