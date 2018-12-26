import React from 'react'
import {
  View, NetInfo, StatusBar, StyleSheet, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'

const NO_CONNECTION_MARKER = 'none'

export default class ScreenWrapper extends React.Component {
  static propTypes = {
    setHeight: PropTypes.func.isRequired,
    setWidth: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  constructor() {
    super()
    this.state = {
      shouldHideContent: false,
      hideContent: false,
    }
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.netInfoEvent)
    Dimensions.addEventListener('change', this.handleRotation)
    const { setWidth, setHeight } = this.props
    setWidth(Dimensions.get('window').width)
    setHeight(Dimensions.get('window').height)
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.netInfoEvent)
    Dimensions.removeEventListener('change', this.handleRotation)
  }

  handleRotation = (dimensions) => {
    const { setWidth, setHeight } = this.props
    setWidth(dimensions.window.width)
    setHeight(dimensions.window.height)
  }

  netInfoEvent = (isConnected) => {
    const { connected, disconnected } = this.props
    console.log(isConnected)
    if (isConnected.type === NO_CONNECTION_MARKER) {
      disconnected()
    } else {
      connected()
    }
  }

  render() {
    const { children } = this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
