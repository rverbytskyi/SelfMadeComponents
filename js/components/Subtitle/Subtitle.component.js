import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styleSheet } from '../../utils/commonPropTypes'

class SubTitle extends React.PureComponent {
  static propTypes = {
    subTitle: PropTypes.string.isRequired,
    containerStyle: styleSheet,
    subTitleStyle: styleSheet,
  }

  render() {
    const { subTitle, containerStyle, subTitleStyle } = this.props
    return (
      <View style={containerStyle}>
        <Text style={subTitleStyle}>
          {subTitle}
        </Text>
      </View>
    )
  }
}

export default SubTitle
