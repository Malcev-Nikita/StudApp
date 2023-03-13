import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InfoSubject from "./InfoSubject";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator();

class NavigationSubject extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="InfoSubject" component={InfoSubject} />
                    <Stack.Screen name="Home" Component={BottomNavigator} options={{title: 'Welcome'}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default NavigationSubject