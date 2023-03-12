import 'react-native-gesture-handler';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import * as Device from 'expo-device';

import BottomNavigator from './src/panels/BottomNavigator';


const fonts = () => Font.loadAsync({
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  console.log(Device.brand);

  if (font) {
    return (
      <BottomNavigator/>
    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(error)=> console.warn(error)} />
    );
  }
}