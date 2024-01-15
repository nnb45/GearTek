import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../components/navigation/LoginStack';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'LoginScreen'>;
const LoginScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>LoginScreen</Text>
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({})