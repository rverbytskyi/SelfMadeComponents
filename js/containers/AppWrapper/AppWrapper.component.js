import React from 'react'
import {
  View, NetInfo, StatusBar, StyleSheet, Dimensions,
} from 'react-native'

const NO_CONNECTION_MARKER = 'none'

export default class AppWrapper extends React.Component {
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
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
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
