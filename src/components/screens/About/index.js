import React from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import Button from 'components/ui/Button'
import styles from './styles'
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
// import icoMoonConfig from 'store/fonts/mSign.json'
// import { Actions, ActionConst } from 'react-native-router-flux'

// const Icon = createIconSetFromIcoMoon(icoMoonConfig)
class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sourceList: [
        {
          id: '1',
          name: 'Forge',
          link: 'https://github.com/digitalbazaar/forge',
          version: '0.6.40',
          license: 'BSD License'
        },
        {
          id: '2',
          name: 'Forge',
          link: 'https://github.com/digitalbazaar/forge',
          version: '0.6.40',
          license: 'BSD License'
        }
      ]
    }
  }
  renderSourceList () {
    return this.state.sourceList.map(item => (
      <View
        style={styles.modeListItem}
        key={item.id}>
        <Text style={styles.aboutTitle}>
          {item.name}
        </Text>
        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItem}>
            URL {item.link}
          </Text>
        </View>
        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItem}>
            Version {item.version}
          </Text>
        </View>
        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItem}>
            License {item.license}
          </Text>
        </View>
      </View>
      )
    )
  }
  render () {
    return (
      <ScrollView style={styles.screen}>
        <Text style={styles.aboutHeader}>
          About Scriptel mSign
        </Text>
        <Text style={styles.aboutTitle}>
          Version Information
        </Text>
        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItem}>
            Version 0.0.0
          </Text>
        </View>
        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItem}>
            Build Date 09/27/2017
          </Text>
        </View>
        <View style={styles.aboutItemContainer}>
          <Text style={styles.aboutItem}>
            Online Info
          </Text>
        </View>
        {/* <Button
          title={'Report Problem'}
          onTouch={() => Actions.Report({ type: ActionConst.RESET })} /> */}
        <Button
          title={'Report Problem'}
          onTouch={() => console.log('To')} />
        
        <View style={styles.sourceList}>
          <Text style={styles.aboutHeader}>
            Open Source
          </Text>
          <Text style={[styles.aboutHeader, styles.aboutSubHeader]}>
            Scriptel mSign gratefully uses the following open source libraries.
          </Text>
          {this.renderSourceList()}
        </View>
      </ScrollView>
    )
  }
}

export default About
