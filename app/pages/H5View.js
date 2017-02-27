import React, { Component } from 'react';
import {Text, View, Image, StyleSheet,Dimensions,TouchableOpacity,WebView } from 'react-native';

export default class H5View extends Component {
  constructor(props) {
      super(props);
      this.state = {
        url: this.props.url
      }
  }

  _back(){
    const { navigator} = this.props;
    if (navigator) {
        navigator.pop()
    }
  }

  render() {
    return (
      <View style={H5Styles.container}>
        <View style={H5Styles.header}>
          <TouchableOpacity onPress={this._back.bind(this)}>
            <Text style={H5Styles.headerText}>&#60;</Text>
          </TouchableOpacity>
          <View style={H5Styles.titleView}>
            <Text style={H5Styles.title}>标题</Text>
          </View>
        </View>
        <WebView
          style={{
            height: 200,
          }}
          source={{uri:this.state.url}}
        />
      </View>

    )
  }
}

const H5Styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    height: 30,
    backgroundColor: '#F2F2F2',
    flexDirection:'row',
    alignItems:'center',
  },
  headerText:{
    fontSize: 25,
    marginLeft: 10,
  },
  titleView:{
    flex:1,
    alignItems:'center',
  },
  title:{
    fontSize: 25,
    alignSelf:'center',
  },

})
