import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MyCartStackParamList } from '../../components/navigation/MyCartStack';

type PropsType = NativeStackScreenProps<MyCartStackParamList, 'MyCartScreen'>;
const MyCartScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>WishScreen</Text>
        </View>
    )
}


export default MyCartScreen

const styles = StyleSheet.create({})