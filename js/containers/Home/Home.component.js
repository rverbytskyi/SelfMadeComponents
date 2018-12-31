import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Title from '../../components/Title'
import SubTitle from '../../components/Subtitle'

class Home extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
  }

  render() {
    const { height, width } = this.props
    return (
      <View style={styles.container}>
        <Title title='Home screen' />
        <SubTitle subtitle={`Height is ${height}`} />
        <SubTitle subtitle={`Width is ${width}`} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
