import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import Masculino from '../screens/masculino';
import Feminino from '../screens/feminino';
import Pagamentos from '../screens/pagamentos';
import Sobre from '../screens/about';
import StackNavigator from './stackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Pagamentos') {
            iconName = focused ? 'md-card' : 'md-card-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'deepskyblue',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen component={StackNavigator} name="Home" options={{headerShown: false}}/>
      <Tab.Screen name="Pagamentos" component={Pagamentos} />
      <Tab.Screen name="Sobre" component={Sobre} />
      
    </Tab.Navigator>
  );
}
