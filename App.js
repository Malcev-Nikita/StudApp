import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/panels/Home';
import Settings from './src/panels/Settings';

import tab from './src/style/tab_style';

const homeName = "Домой";
const settingsName = "Настройки";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ borderRadius: 10 }}>
      <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) iconName = focused ? 'home' : 'home-outline'; 

            else if (rn === settingsName) iconName = focused ? 'settings' : 'settings-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#A78093',
          inactiveTintColor: '#E1BBAD',
          labelStyle: { paddingBottom: 48, fontSize: 10 },
          tabStyle: {  paddingTop: 3, height: 90, backgroundColor: '#F2E5DF' }
        }}
      >
          <Tab.Screen name={homeName} component={Home} options={{headerShown: false}} />
          <Tab.Screen name={settingsName} component={Settings} options={{headerShown: false}} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}