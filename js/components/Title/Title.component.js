import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { styleSheet } from '../../utils/commonPropTypes'


class Title extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    containerStyle: styleSheet,
    titleStyle: styleSheet,
  }

  static defaultProps = {
    title: '',
  }

  render() {
    const { title, containerStyle, titleStyle } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  title: {
    fontSize: 22,
  },
})

export default Title
