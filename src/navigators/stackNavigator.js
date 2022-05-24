import React from 'react';
import Home from '../screens/home';
import Masculino from '../screens/masculino';
import Feminino from '../screens/feminino';
import Pagamentos from '../screens/pagamentos';
import Sobre from '../screens/about';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feminino" component={Feminino} />
      <Stack.Screen name="Masculino" component={Masculino} />
      <Stack.Screen name="Formas de Pagamento" component={Pagamentos} />
      <Stack.Screen name="Sobre a Loja" component={Sobre} />
    </Stack.Navigator>
  );
}
