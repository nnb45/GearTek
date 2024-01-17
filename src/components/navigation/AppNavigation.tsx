import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import BottomNavigation from '../BottomTab/BottomNavigation';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
    </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default AppNavigation;
