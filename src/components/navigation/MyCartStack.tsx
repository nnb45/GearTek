import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCartScreen from '../../screens/MyCart/MyCartScreen';
import PaymentStatusScreen from '../../screens/Home/PaymentStatusScreen';
import ReceiptScreen from '../../screens/Home/ReceiptScreen';
import PaymentMethodScreen from '../../screens/Home/PaymentMethodScreen';

type MyCartScreenProps = {};
type PaymentMethodScreenProps = {};
type PaymentStatusScreenProps = {};
type ReceiptScreenProps = {};

export type MyCartStackParamList = {
    MyCartScreen: MyCartScreenProps | undefined;
    PaymentMethodScreen: PaymentMethodScreenProps | undefined;
    PaymentStatusScreen: PaymentStatusScreenProps | undefined;
    ReceiptScreen: ReceiptScreenProps | undefined;
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
            <Stack.Screen name="PaymentStatusScreen" component={PaymentStatusScreen} />
            <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} />
            <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
        </Stack.Navigator >
    )
}

export default MyCartStack
