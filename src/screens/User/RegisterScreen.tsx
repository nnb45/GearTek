import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../components/navigation/LoginStack';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'RegisterScreen'>;
const RegisterScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>RegisterScreen</Text>
        </View>
    )
}


export default RegisterScreen

const styles = StyleSheet.create({})