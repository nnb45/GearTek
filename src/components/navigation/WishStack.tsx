import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WishScreen from '../../screens/Wish/WishScreen';

type WishScreenProps = {};


export type WishStackParamList = {
    WishScreen: WishScreenProps | undefined;
};

const Stack = createNativeStackNavigator<WishStackParamList>();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="WishScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="WishScreen" component={WishScreen} />
        </Stack.Navigator >
    )
}

export default ProfileStack
