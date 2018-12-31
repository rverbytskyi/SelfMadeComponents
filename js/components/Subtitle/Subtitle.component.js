import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styleSheet } from '../../utils/commonPropTypes'

class SubTitle extends React.PureComponent {
  static propTypes = {
    subtitle: PropTypes.string.isRequired,
    containerStyle: styleSheet,
    subtitleStyle: styleSheet,
  }

  static defaultProps = {
    subtitle: '',
  }

  render() {
    const { subtitle, containerStyle, subtitleStyle } = this.props
    return (
      <View style={containerStyle}>
        <Text style={subtitleStyle}>
          {subtitle}
        </Text>
      </View>
    )
  }
}

export default SubTitle
