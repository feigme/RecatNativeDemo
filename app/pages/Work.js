import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, Image, StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import H5View from '../pages/H5View';

export default class Work extends Component {
    constructor(props) {
        super(props)
    }

    _onPressCell(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'H5View',
                component:H5View,
            })
        }
    }


  render() {
    return (
      <View style={WorkStyles.container}>
        <View style={WorkStyles.header}>
          <Text style={WorkStyles.headerText}>工作台</Text>
          <Image source={require('../images/idx_1.jpg')} style={WorkStyles.banner}/>
        </View>
        <View style={WorkStyles.body}>
          <View style={WorkStyles.box}>
            <Text style={WorkStyles.boxTitle}>日常办公</Text>
            <View style={WorkStyles.ol}>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/e9/ee/d1/8b0f4c974a19d0bda4b801f0c296d46548a93f13.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>公告</Text>
              </View>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/c9/d3/91/49a53afbb9aa03c1f3031d5a4d6bcc2340c634de.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>考勤</Text>
              </View>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/0e/ee/af/36834ffa3d8e0998a3cc8d36bbec37516722ffa3.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>审批</Text>
              </View>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/86/63/00/ed275d7bb37af990ca6cd54f1f79b13e17ee8d1b.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>日志</Text>
              </View>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/0c/b6/a8/a5ca2b539e233b53ee4f5b7669138d4d0eb60e10.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>绩效</Text>
              </View>
              <View style={WorkStyles.li}/>
              <View style={WorkStyles.li}/>
              <View style={WorkStyles.li}/>
            </View>
          </View>

          <View style={WorkStyles.box}>
            <Text style={WorkStyles.boxTitle}>工作管理</Text>
            <View style={WorkStyles.ol}>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/f6/79/f1/42b553a1a6c3de3c99ca5e9721ed40a5f41658fd.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>客户</Text>
              </View>
              <TouchableOpacity onPress={this._onPressCell.bind(this)}>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/c7/b4/a2/d487b711a625384fd80a1c968ce05b9b6d7f9a97.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>任务</Text>
              </View>
              </TouchableOpacity>
              <View style={WorkStyles.li}>
                <Image source={{uri: 'http://img001.meitianhui.com/public/images/27/3c/4b/28de461b9880bbe6e761436ce62f0050b762fb22.png'}} style={WorkStyles.cellImg}/>
                <Text style={WorkStyles.cellTxt}>拜访</Text>
              </View>
              <View style={WorkStyles.li}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const WorkStyles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    alignItems:'center',
    justifyContent:'center',
  },
  headerText:{
    fontSize:25,
  },
  banner:{
    height: 150,
  },
  body:{
    flex:1,
    backgroundColor:'#F2F2F2',
  },
  box:{
    marginTop:15,
    backgroundColor:'#FFFFFF',
  },
  boxTitle:{
    height: 30,
    paddingTop:5,
    paddingLeft:5,
    fontSize:16,
    justifyContent:'center',
  },
  ol:{
    // 主轴方向
    flexDirection:'row',
    // 一行显示不下,换一行
    flexWrap:'wrap',
    // 侧轴方向
    alignItems:'center', // 必须设置,否则换行不起作用
  },
  li:{
    width:Dimensions.get('window').width/4,
    height:Dimensions.get('window').width/4,
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth: 1,
    borderTopWidth:1,
    borderColor: '#eaeaea',
  },
  cellImg:{
    height: 60,
    width: 60,
  },
  cellTxt:{
    fontSize: 16,
  },
})
