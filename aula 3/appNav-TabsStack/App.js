import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
          />
          <Tab.Screen
            name="Contato"
            component={Contato}
          />
          <Tab.Screen
            name="Sobre"
            component={Sobre}
          />
        </Tab.Navigator>
    </NavigationContainer>
  )
}