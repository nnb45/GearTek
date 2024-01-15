import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../../screens/Profile/ProfileScreen"

type ProfileScreenProps = {};


export type ProfileStackParamList = {
    ProfileScreen: ProfileScreenProps | undefined;
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
        </Stack.Navigator >
    )
}

export default ProfileStack
