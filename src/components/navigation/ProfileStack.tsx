import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../../screens/Profile/ProfileScreen"
import PaymentMethodScreen from '../../screens/Home/PaymentMethodScreen';

type ProfileScreenProps = {};
type PaymentMethodScreenProps = {};

export type ProfileStackParamList = {
    ProfileScreen: ProfileScreenProps | undefined;
    PaymentMethodScreen: PaymentMethodScreenProps | undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ProfileScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
        </Stack.Navigator >
    )
}

export default ProfileStack
