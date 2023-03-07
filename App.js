import 'react-native-gesture-handler';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

import Front from './src/panels/Front';
import Authorization from './src/panels/Authorization';
import Registration from './src/panels/Registration';
import BottomNavigator from './src/panels/BottomNavigator';

const Stack = createStackNavigator();

const fonts = () => Font.loadAsync({
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      // <NavigationContainer independent={true}>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Front" component={Front} options={{headerShown: false}} />
      //     <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
      //     <Stack.Screen name="Authorization" component={Authorization} options={{headerShown: false}} />
      //     <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown: false}} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      <BottomNavigator/>
    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(error)=> console.warn(error)} />
    );
  }
}