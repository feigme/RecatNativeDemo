/**
 * Created by linyufeng on 2016/8/27.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
    Image,
    Dimensions,
    TouchableOpacity,
    ToastAndroid,
}from 'react-native';
import Login from '../pages/Login';

export default class Welcome2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        }
    }
    //监听页面变化
    onPageSelected=function(e) {
        //默认从0开始，0是第一页
        this.setState({page: e.nativeEvent.position});
        console.log('CurrentPage: '+e.nativeEvent.position);
        // ToastAndroid.show('CurrentPage: '+e.nativeEvent.position, ToastAndroid.SHORT);
    }

    _onPressButton(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'Login',
                component:Login,
            })
        }
    }

    render() {
        let page = this.state.page;
        return (
            <View style={styles.bg}>
                <ViewPagerAndroid
                    /*左右翻页组件*/
                    style={styles.container}
                    //绑定事件，引用时要在函数末尾加bind(this)
                    onPageSelected={this.onPageSelected.bind(this)}
                    //初始化页面为第一个页面，从0开始
                    initialpage={0}>
                    <View style={styles.container}>
                        <Image source={require('../images/idx_1.jpg')} style={styles.image}/>
                    </View>
                    <View style={styles.container}>
                        <Image source={require('../images/idx_2.jpg')} style={styles.image}/>
                    </View>
                    <View style={styles.container}>
                        <Image source={require('../images/idx_3.jpg')} style={styles.image}/>
                    </View>
                    <View style={styles.container}>
                        <Image source={require('../images/idx_4.jpg')} style={styles.image}>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={this._onPressButton.bind(this)}
                              underlayColor="#B5B5B5">
                              <Text style={styles.buttonText}>启动应用</Text>
                            </TouchableOpacity>
                        </Image>
                    </View>
                </ViewPagerAndroid>
                <View
                    style={styles.slider}>
                    <View style={styles.ol}>
                        <View style={page==0?styles.currt:styles.li}/>
                        <View style={page==1?styles.currt:styles.li}/>
                        <View style={page==2?styles.currt:styles.li}/>
                        <View style={page==3?styles.currt:styles.li}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    image: {
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // resizeMode: Image.resizeMode.contain,
    },
    welcome: {
        fontSize: 16,
        textAlign: 'center',
    },
    slider: {
        marginTop: -80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ol: {
        backgroundColor:'rgba(0,0,0,0.3)',
        height:20,
        width:80,
        justifyContent:'space-around',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius:10,
        margin:20,
    },
    li: {
        backgroundColor:'rgba(255,255,255,1.0)',
        height:10,
        width:10,
        borderRadius:5,
    },
    currt: {
        backgroundColor:'yellow',
        height:10,
        width:15,
        borderRadius:5,
    },
    button: {
        backgroundColor: 'white',
        marginBottom: 100,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
        width:200,
        height: 50,
        alignSelf:'center',
    },
    buttonText: {
        padding: 15,
        textAlign: 'center',
        alignItems:'center',
    },
});
