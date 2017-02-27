import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
// import Login from './pages/Login';
import Welcome2 from './pages/Welcome2';

export default class Nav extends Component {
   constructor(props) {
     super(props);
   }
   render() {
    let defaultName = 'Main';
    let defaultComponent = Welcome2;
    return (
      <Navigator
        initialRoute = {{name : defaultName , component: defaultComponent}}
        configureScene = {(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route,navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator} />
        }}
        />
    );
  }

};
