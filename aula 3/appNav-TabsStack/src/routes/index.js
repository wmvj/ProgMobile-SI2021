import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel:true,
            tabBarActiveTintColor: '#FFF',
            tabBarStyle:{
              backgroundColor: '#202225',
              borderTopWidth: 0
            }
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={StackRoutes}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Feather name="home" color={color} size={size} />
              }
            }}
          />
          <Tab.Screen
            name="Sobre"
            component={Sobre}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Feather name="file-text" color={color} size={size} />
              }
            }}
          />
          <Tab.Screen
            name="Contato"
            component={Contato}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Feather name="phone-call" color={color} size={size} />
              }
            }}

          />

        </Tab.Navigator>
  )
}