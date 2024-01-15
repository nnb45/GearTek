import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'MyCartScreen'>;
const MyCartScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>MyCartScreen</Text>
        </View>
    )
}


export default MyCartScreen

const styles = StyleSheet.create({})