import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'PaymentMethodScreen'>;
const PaymentMethodScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>PaymentMethodScreen</Text>
        </View>
    )
}


export default PaymentMethodScreen

const styles = StyleSheet.create({})