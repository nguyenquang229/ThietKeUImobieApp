
import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,

} from 'react-native';

import {
    Colors,

} from 'react-native/Libraries/NewAppScreen';

export default class Checksuccess extends Component {
    render() {
        return (
            <View style={styles.sessionContainer}>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>

                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('./icon-check.png')}
                        />
                    </View>
                    <View style={{ marginTop:20 }}>

                        <Text>
                            Bạn đã đăng kí tài khoản thành công
                </Text>
                    </View>
                    <View style={{ marginTop:100 }}>

                        <TouchableOpacity style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{ color: Colors.white, fontWeight: "bold", fontSize: 16, textAlign: "center" }}>
                                ĐÓNG                  
                            </Text>
                            
                        </TouchableOpacity>
                    </View>
                    </View>
               
            </View>


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
        borderRadius: 4,
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
        , marginTop:60

    },
    touchableOpacity: {
        width: 230,
        backgroundColor: Colors.primary,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        padding: 4,



    }
})