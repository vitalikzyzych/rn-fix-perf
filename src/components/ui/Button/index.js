import React from 'react'
import { Text, TouchableHighlight, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import ThemeConst from 'constants/styleConstants'
import styles from './styles'

export default class Button extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      width: 0
    }
    this.onLayout = this.onLayout.bind(this)
  }

  onLayout () {
    const { width } = Dimensions.get('window')
    this.setState({ width })
  }

  render () {
    const { width } = this.state

    return (
      <TouchableHighlight
        onLayout={this.onLayout}
        style={[styles.button, this.props.bottomPosition && styles.bottomPos, {
          width
        }]}
        underlayColor={ThemeConst.appColors.touchedBlueButton}
        onPress={() => this.props.onTouch()}>
        <Text style={styles.buttonText}>
          {this.props.title.toUpperCase()}
        </Text>
      </TouchableHighlight>
    )
  }
}

Button.propTypes = {
  bottomPosition: PropTypes.bool
}

Button.defaultProps = {
  bottomPosition: false,
  leftButton: null,
  rightButton: null
}
