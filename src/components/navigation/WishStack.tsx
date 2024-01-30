import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WishScreen from '../../screens/Wish/WishScreen';
import MyCartScreen from '../../screens/MyCart/MyCartScreen';

type WishScreenProps = {};
type MyCartScreenProps = {};

export type WishStackParamList = {
    WishScreen: WishScreenProps | undefined;
    MyCartScreen: MyCartScreenProps | undefined;
};

const Stack = createNativeStackNavigator<WishStackParamList>();

const WishStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="WishScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="WishScreen" component={WishScreen} />
            <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
        </Stack.Navigator >
    )
}

export default WishStack
