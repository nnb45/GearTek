import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/User/LoginScreen';
import RegisterScreen from '../../screens/User/RegisterScreen';

// type SplashScreenProps = {};
type LoginScreenProps = {};
type RegisterScreenProps = {};
// type OTPScreenProps = {};

export type LoginStackParamList = {
    // SplashScreen: SplashScreenProps | undefined;
    LoginScreen: LoginScreenProps | undefined;
    RegisterScreen: RegisterScreenProps | undefined;
    // OTPScreen: OTPScreenProps | undefined;
};

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            {/* <Stack.Screen name="OTPScreen" component={OTPScreen} /> */}
        </Stack.Navigator >
    )
}

export default LoginStack