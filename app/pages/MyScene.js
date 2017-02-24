import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,ListView } from 'react-native';

export default class MyScene extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      movies: null,  //这里放你自己定义的state变量及初始值
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };

    this.fetchData = this.fetchData();
  }

  static defaultProps = {
    title: 'MyScene'
  };

  fetchData(){
    //192.168.10.17:8019
    fetch('http://yige.huigujia.cn/javaApis/yige/task/v1/list.json')
      .then((response) => response.json())
      .then((responseData) => {
        console.log("---1--"+JSON.stringify(responseData));
        this.setState({
          movies: JSON.stringify(responseData),
        });
      });
  }

  render() {
    console.log("类中的方法");
    return (
      <View style={{flex: 1, paddingTop: 22}}>
      <Text>{this.state.movies}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}
