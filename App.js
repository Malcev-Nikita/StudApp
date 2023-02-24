import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/panels/Home';
import Settings from './src/panels/Settings';

const homeName = "Домой";
const settingsName = "Настройки";

const Tab = createBottomTabNavigator();

export default function App() {
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
              <Icons name="home" color={color} size={26} />
            ) }} 
          />
          <Tab.Screen name={settingsName} component={Settings} options={{
            headerShown: false, 
            tabBarIcon: ({ color }) => (
              <Icons name="settings" color={color} size={26} />
            ) }} 
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}