import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MyScene from '../pages/MyScene';

export default class Tab extends Component {
  constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require('../images/ic_tab_strip_icon_category.png')} style={MainPageStyle.tab_icon} />}
          renderSelectedIcon={() => <Image source={require('../images/ic_tab_strip_icon_category_selected.png')} style={MainPageStyle.tab_icon}/>}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <MyScene title="--aaaa--"/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed.png')} style={MainPageStyle.tab_icon}/>}
          renderSelectedIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed_selected.png')} style={MainPageStyle.tab_icon}/>}
          // renderBadge={() => <MyScene />}
          // badgeText="2"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <MyScene title="--bbbb--"/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const MainPageStyle = StyleSheet.create({
    tab_container: {
        height: 42,
    },
    tab_icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    tab_title: {
        color: "#929292",
        fontSize: 8,
    },
    tab_title_selected: {
        color: "#333333",
        fontSize: 8,
    }
})
