import React from 'react';
console.disableYellowBox = true;
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigators/tabNavigator';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
