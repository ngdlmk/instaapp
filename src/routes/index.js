import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import Auth from '../screens/Auth'
import Details from '../screens/Details';
const Stack = createStackNavigator()


const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Auth" 
                    component={Auth} 
                    options={{ 
                        headerShown: false,
                    }} 
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ 
                        headerShown: false,
                    }} 
                />
                
                <Stack.Screen 
                    name="Details" 
                    component={Details} 
                    options={{ 
                        headerShown: false,
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root