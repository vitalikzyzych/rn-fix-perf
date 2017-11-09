import { Dimensions, Platform } from 'react-native'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default {
  fontFamily: {
    roboto: 'Roboto-Regular',
    robotoLight: 'Roboto-Light',
    robotoBold: 'Roboto-Bold'
  },
  screenWidth,
  screenHeight,
  screenHeightWithHeaderAndFooter: (Platform.OS === 'ios') ? screenHeight - 102 : screenHeight - 79,
  screenHeightWithHeaderAndFooterAndScroll: (Platform.OS === 'ios') ? screenHeight - 102 : screenHeight - 130,
  colors: {
    white: '#ffffff',
    black: '#000000',
    blue: '#4d74e8',
    darkGrey: '#575956',
    mediumGrey: '#979B9C',
    stateGrey: '#708090',
    lightGrey: '#EFEFEF',
    buttonGrey: '#45515B',
    buttonGreyClicked: '#3a444c',
    appBackground: '#384359',
    error: '#FF7F7F'
  },
  appColors: {
    mainBlue: '#226ca6',
    touchedBlueButton: '#3498DB',
    white: '#ffffff',
    lightBlue: '#a0bfff',
    mediumBlue: '#527acc',
    darkBlue: '#384359',
    blue: '#6699ff',
    lightGrey: '#f0f1f5',
    mediumLightGrey: '#f8f8f9',
    mediumGrey: '#858396',
    darkGrey: '#323232',
    green: '#73e59f',
    grey: '#e1e4eb',
    greyTextColor: '#323232',
    red: '#ff7f7f',
    sideDrawer: '#293241',
    activeDrawerMenu: '#4c566a',
    text: '#293241',
    border: '#f0f1f5'
  }
}
