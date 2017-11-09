import { StyleSheet } from 'react-native'
import ThemeConst from 'constants/styleConstants'

module.exports = StyleSheet.create({
  screen: {
    flex: 1
  },
  aboutHeader: {
    fontSize: 20,
    fontFamily: ThemeConst.fontFamily.roboto,
    paddingVertical: 20,
    paddingLeft: 10,
    color: ThemeConst.appColors.darkGrey
  },
  aboutSubHeader: {
    fontSize: 18
  },
  aboutTitle: {
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: ThemeConst.appColors.lightGrey,
    paddingVertical: 25,
    fontFamily: ThemeConst.fontFamily.roboto,
    color: ThemeConst.appColors.darkGrey
  },
  aboutItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: ThemeConst.appColors.lightGrey,
    paddingVertical: 20,
    paddingLeft: 10
  },
  aboutItem: {
    fontSize: 16,
    color: ThemeConst.appColors.darkGrey,
    fontFamily: ThemeConst.fontFamily.roboto
  },
  modeListItem: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: ThemeConst.appColors.lightGrey,
    backgroundColor: ThemeConst.appColors.mediumLightGrey
  },
  modeListItemSelected: {
    backgroundColor: ThemeConst.appColors.white
  },
  listIcon: {
    marginHorizontal: 20,
    color: ThemeConst.appColors.mediumGrey
  },
  modelistIconSelected: {
    color: ThemeConst.appColors.mainBlue
  },
  modelistTitle: {
    color: 'rgba(50, 50, 50, 0.5)',
    fontSize: 18
  },
  modelistTitleSelected: {
    color: ThemeConst.appColors.darkGrey
  }
})
