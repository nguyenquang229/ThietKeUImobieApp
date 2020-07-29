
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import {

    Colors,

} from 'react-native/Libraries/NewAppScreen';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />

                <View style={styles.sectionContainer}>
                    <View style={{ flex: 2, flexDirection: "row", justifyContent: "center" }}>

                        <Image style={styles.image}
                            source={require('./logovnpt.png')}
                        />

                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ flexDirection: "column" }}>
                            <TextInput style={styles.textInput}
                                placeholder='Tên đăng nhập'
                                underlineColorAndroid='rgba(0,0,0,0)'
                                maxLength={50}
                            >

                            </TextInput>
                            <TextInput style={styles.textInput}
                                placeholder='****************'
                                secureTextEntry={true}
                                maxLength={18}

                            >
                                

                            </TextInput>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <Text style={{ color: Colors.primary, textDecorationLine: "underline" }}>
                                    Quên mật khẩu ?
                          </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2, flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <TouchableOpacity 
                                style={styles.btnStyle}
                              
                             >
                                <Text style={{ color: Colors.white, fontWeight: "bold", }}
                                >
                                    Đăng nhập
                      </Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={{ color: Colors.black, }}>
                                    Bạn chưa có tài khoản  ?
                              </Text>
                                <TouchableOpacity style={{}}
                                    onPress={() => this.props.navigation.navigate('Dangki')}
                                   >

                                    <Text style={{ color: Colors.primary, textDecorationLine: "underline" }}>
                                        Đăng kí tại đây
                          </Text>
                                </TouchableOpacity>
                            
                            </View>
                        </View>

                    </View>
                </View>

            </>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        
    },
    textInput:
    {
        borderWidth: 2,
        width: 200,
        height: 30,

    },
    engine: {
        
        position: 'absolute',
        right: 0,
    },
    image:
    {
        width: 256,
        height: 128,
        marginTop: 60,
        resizeMode: 'contain'
    },
    textHover:
    {

    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        //marginTop: 32, 
        //   paddingHorizontal: 24,
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-start",
    },
    textInput:
    {
        marginBottom: 10,
        height: 35,
        width: 256,
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 4,
        textAlign: "left"
        , padding: 8


    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
        
    },
    btnStyle: {
        height: 30,
        width: 256,
        borderColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: 'center',
        margin: 8,

        backgroundColor: Colors.primary,
    },
});


