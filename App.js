import 'react-native-gesture-handler';
import * as React from 'react';
import Home from './Home';
import Dangki from './Dangki';
import Checksuccess from './Checksuccess';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function App()  {
     
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'Đăng nhập' }}
                    />
                    <Stack.Screen
                        name="Dangki"
                        component={Dangki}
                        options={{title:'Đăng kí tài khoản mới' }}
                        
                    />
                    <Stack.Screen
                        name="Check"
                        component={Checksuccess}
                        options={{ title: 'Đăng kí tài khoản thành công' }}
                    />
                    

                </Stack.Navigator>
            </NavigationContainer>
            );
    }

export default App;
