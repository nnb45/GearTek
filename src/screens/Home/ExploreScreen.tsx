import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'ExploreScreen'>;
const ExploreScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>ExploreScreen</Text>
        </View>
    )
}


export default ExploreScreen

const styles = StyleSheet.create({})