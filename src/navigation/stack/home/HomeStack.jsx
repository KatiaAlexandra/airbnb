import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../../../modules/home/screens/Home';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={Home} options={{title:'Inicio'}}/>
    </Stack.Navigator>
  )
}