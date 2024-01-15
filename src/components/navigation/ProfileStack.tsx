import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../../screens/ProfileScreen"

type ProfileScreenProps = {};
type EditProfileScreenProps = {};
type ForgotPasswordScreenProps = {};
type LoginStackProps = {};
type MyCardScreenProps = {};
type AddNewCardScreenProps = {};
type RuleScreenProps = {};

export type ProfileStackParamList = {
    ProfileScreen: ProfileScreenProps | undefined;
    EditProfile: EditProfileScreenProps | undefined;
    ForgotPassword: ForgotPasswordScreenProps | undefined;
    LoginScreen: LoginStackProps | undefined;
    MyCardScreen: MyCardScreenProps | undefined;
    AddNewCardScreen: AddNewCardScreenProps | undefined;
    RuleScreen: RuleScreenProps | undefined;
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
