import React, { useContext } from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import BottomNavigation from '../BottomTab/BottomNavigation';
import { AppContext } from '../context/AppContext';

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                {isLogin ? <LoginStack /> : <BottomNavigation />}
            </NavigationContainer>
        </View>
    )
}

export default AppNavigation;
