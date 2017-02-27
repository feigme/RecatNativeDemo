import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MyScene from '../pages/MyScene';
import Work from '../pages/Work';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        selectedTab: 'work'
    }
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'work'}
          title="工作台"
          renderIcon={() => <Image source={require('../images/ic_tab_strip_icon_category.png')} style={MainPageStyle.tab_icon} />}
          renderSelectedIcon={() => <Image source={require('../images/ic_tab_strip_icon_category_selected.png')} style={MainPageStyle.tab_icon}/>}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'work' })}>
          <Work navigator = {this.props.navigator}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'concat'}
          title="联系人"
          renderIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed.png')} style={MainPageStyle.tab_icon}/>}
          renderSelectedIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed_selected.png')} style={MainPageStyle.tab_icon}/>}
          // renderBadge={() => <MyScene />}
          // badgeText="2"
          onPress={() => this.setState({ selectedTab: 'concat' })}>
          <MyScene title="--bbbb--"/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'msg'}
          title="消息"
          renderIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed.png')} style={MainPageStyle.tab_icon}/>}
          renderSelectedIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed_selected.png')} style={MainPageStyle.tab_icon}/>}
          // renderBadge={() => <MyScene />}
          // badgeText="2"
          onPress={() => this.setState({ selectedTab: 'msg' })}>
          <MyScene title="--cccc--"/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'person'}
          title="个人中心"
          renderIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed.png')} style={MainPageStyle.tab_icon}/>}
          renderSelectedIcon={() => <Image source={require('../images/ic_tab_strip_icon_feed_selected.png')} style={MainPageStyle.tab_icon}/>}
          // renderBadge={() => <MyScene />}
          // badgeText="2"
          onPress={() => this.setState({ selectedTab: 'person' })}>
          <MyScene title="--eeee--"/>
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
