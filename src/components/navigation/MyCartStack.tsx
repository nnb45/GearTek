import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCartScreen from '../../screens/Home/MyCartScreen';

type MyCartScreenProps = {};


export type MyCartStackParamList = {
    MyCartScreen: MyCartScreenProps | undefined;
};

const Stack = createNativeStackNavigator<MyCartStackParamList>();

const MyCartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="MyCartScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
        </Stack.Navigator >
    )
}

export default MyCartStack
