import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/panels/Home';
import Settings from './src/panels/Settings';

import tab from './src/style/tab_style';

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                if (rn === homeName) {
                  iconName = focused ? 'home' : 'home-outline';
    
                } 
                // else if (rn === detailsName) {
                //   iconName = focused ? 'list' : 'list-outline';
    
                // } 
                // else if (rn === settingsName) {
                //   iconName = focused ? 'settings' : 'settings-outline';
                // }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#A78093',
              inactiveTintColor: '#E0D3CE',
              labelStyle: { paddingBottom: 7, fontSize: 10 },
              style: { padding: 10, height: 70, }
            }}
          >
              <Tab.Screen name={homeName} component={Home} options={{headerShown: false}} />
              <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}
