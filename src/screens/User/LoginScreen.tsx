import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../components/navigation/LoginStack';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'LoginScreen'>;
const LoginScreen: React.FC<PropsType> = props => {

    //handle naviagtion regster
    const _navigationRegister = () => {
        navigation.navigate('RegisterScreen')
    }

     
    const { navigation } = props
    return (
        <View>
            <Button title='Go to register'
                onPress={_navigationRegister} />

            
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({})