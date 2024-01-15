import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;
const HomeScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({})