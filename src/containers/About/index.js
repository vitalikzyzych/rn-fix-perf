import React from 'react'
import {
  View,
  StatusBar
} from 'react-native'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { Actions, ActionConst } from 'react-native-router-flux'
// import * as globalActions from 'actions/global'
import AboutScreen from 'components/screens/About'
// import NavBar from 'components/ui/NavBar'
import styles from './styles.js'

class About extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}>
        {<StatusBar barStyle="light-content" />}
        {/* <NavBar
          title={this.props.title}
          onPress={() => Actions.Signing({ type: ActionConst.RESET })} /> */}
        <AboutScreen />
      </View>
    )
  }
}
// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators({ ...globalActions }, dispatch)
//   }
// }
// function mapStateToProps (state) {
//   return {
//     selectedMode: state.global.selectedMode
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(About)
export default About
