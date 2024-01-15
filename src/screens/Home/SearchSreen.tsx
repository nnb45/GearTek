import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'SearchScreen'>;
const SearchScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>SearchScreen</Text>
        </View>
    )
}


export default SearchScreen

const styles = StyleSheet.create({})