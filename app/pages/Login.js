import React, { Component } from 'react';
import { Text,TextInput, View, Image, StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import Main from '../pages/Main';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }

  _login(){
    var DeviceInfo = require('react-native-device-info');
    console.log("userName: " + this.userName)
    console.log("password: "+this.password)

    const { navigator} = this.props;
    fetch('http://yige.huigujia.cn/javaApis/yige/userAppLogin/v1/login.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'deviceId='+uuid.v4()+'&mobile='+this.userName+'&password='+this.password+'&installationId=&appVersion=2.0.0'
    }).then((response) => {
      console.log("111-" + JSON.stringify(response));
      return response.json()
    })
    .then((responseJson) => {
        console.log("222-" + JSON.stringify(responseJson));
        console.log("333-" + responseJson.success);
        if (responseJson.success==true) {
          console.log("444-");
          if (navigator) {
            console.log("555-");
              navigator.push({
                  name:'Main',
                  component:Main,
              })
          }
        }
      }).done();
  }

  render() {
    return (
      <View style={LoginStyles.loginview}>
        <Image source={require('../images/login_bg.jpg')} style={LoginStyles.bg}>
          <View style={LoginStyles.inputview}>
            <Text style={LoginStyles.text}>账号</Text>
            <TextInput style={LoginStyles.input} placeholder="请输入账号"
              onChangeText={(text) => {this.userName=text}}/>
          </View>
          <View style={LoginStyles.inputview}>
            <Text style={LoginStyles.text}>密码</Text>
            <TextInput style={LoginStyles.input} placeholder="请输入密码"
              secureTextEntry={true} onChangeText={(text)=>{this.password=text}}/>
          </View>
          <View>
            <TouchableOpacity underlayColor="#38adff"  onPress={this._login.bind(this)}>
              <View style={LoginStyles.submit}>
              <Text style={{color:'#fff'}}>登录</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

const LoginStyles = StyleSheet.create({
  loginview:{
    flex:1
  },
  bg:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
  inputview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    alignSelf:'center',
    width: 40,
  },
  input:{
    alignSelf:'center',
    width: 180,
  }
});
