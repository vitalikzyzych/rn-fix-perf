import { StyleSheet } from 'react-native'
import ThemeConst from 'constants/styleConstants'

module.exports = StyleSheet.create({
  button: {
    backgroundColor: ThemeConst.appColors.mainBlue,
    height: 60
  },
  buttonText: {
    color: ThemeConst.appColors.white,
    fontSize: 18,
    paddingVertical: 20,
    textAlign: 'center',
    fontFamily: ThemeConst.fontFamily.roboto
  },
  bottomPos: {
    bottom: 0,
    position: 'absolute'
  }
})
