import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import News from './News';
import Settings from './Settings';

const homeName = "Домой";
const newsName = "Новости";
const settingsName = "Настройки";

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
              height: 55,
              position: 'absolute',
              bottom: 16,
              right: 25,
              left: 25,
              borderRadius: 16 }
          }}
          tabBarOptions={{showLabel: false}}
          initialRouteName={homeName}
          labeled={false}
        >
            <Tab.Screen name={homeName} component={Home} options={{
              headerShown: false, 
              tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={26} />
              ) }} 
            />
            <Tab.Screen name={newsName} component={News} options={{
              headerShown: false, 
              tabBarIcon: ({ color }) => (
                <FontAwesome name="newspaper-o" color={color} size={26} />
              ) }} 
            />
            <Tab.Screen name={settingsName} component={Settings} options={{
              headerShown: false, 
              tabBarIcon: ({ color }) => (
                <Feather name="settings" color={color} size={26} />
              ) }} 
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

export default BottomNavigator;