import React, { Component } from 'react';
import {
    View,
    StyleSheet,
   
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';


export default class Dangki extends Component {
  
    render() {
        return (
            <>
                <View style={styles.sessionContainer}>
                <View>
                    </View>
                    <View style={{ width: 350, flexDirection: "column", justifyContent: "center" }}>
                        <View style={styles.container}>
                            <Text>
                                Tên đăng nhập<Text style={{ color:'red' }}>*</Text>
                            </Text>
                            <TextInput style={styles.textInput}
                                underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Tên đăng nhập'>

                        </TextInput>
                        </View>
                        <View style={styles.container}>
                        <Text>
                                Số điện thoại<Text style={{ color: 'red' }}>*</Text>
                            </Text>
                            <TextInput style={styles.textInput}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder='Số điện thoại'
                                keyboardType='numeric'
                          
                               
                                
                                >
                                

                        </TextInput>
                    </View>
                    <View style={styles.container}>
                        <Text>
                                Mật khẩu<Text style={{ color: 'red' }}>*</Text>
                        </Text>
                            <TextInput style={styles.textInput}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder='Mật khẩu'
                                secureTextEntry={true}>

                        </TextInput>
                    </View>
                    <View style={styles.container}>
                        <Text>
                                Nhập lại mật khẩu<Text style={{ color: 'red' }}>*</Text>
                        </Text>
                            <TextInput style={styles.textInput}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                secureTextEntry={true}
                            placeholder='Nhập lại mật khẩu'>

                        </TextInput>
                        </View >
                        <View style={{ marginTop:30 }}>
                            <TouchableOpacity style={styles.touchableOpacity}
                                onPress={() => this.props.navigation.navigate('Check')}>
                                <Text style={{ color: Colors.white, fontSize: 17, fontWeight: "bold", textAlign: "center",}}>
                                    Đăng kí tài khoản
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
            </>
                );
    }
};
const styles = StyleSheet.create({
    textInput:
    {
        borderWidth: 1,
        width: 200,
        height: 30,
        padding: 8,
        borderRadius:4,
        textAlign: "left"

    },
    text: {
        fontSize: 14,
        color: Colors.black,

    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20
    },

    sessionContainer: {

        flexDirection: "row",
        flex: 1,
        justifyContent: "center"

    },
    touchableOpacity: {
        width: 350,
        backgroundColor: Colors.primary,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        padding: 4,

        
        
    }
})



