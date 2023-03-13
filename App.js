import 'react-native-gesture-handler';
import { useState } from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import BottomNavigator from './src/pages/BottomNavigator';
import InfoSubject from './src/pages/InfoSubject';


const fonts = () => Font.loadAsync({
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      // <View>
        <BottomNavigator />
        // <InfoSubject/>
        // <NavigationSubject /> 
      // </View>

    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(error)=> console.warn(error)} />
    );
  }
}