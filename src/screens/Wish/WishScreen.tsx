import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WishStackParamList } from '../../components/navigation/WishStack';

type PropsType = NativeStackScreenProps<WishStackParamList, 'WishScreen'>;
const WishScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>WishScreen</Text>
        </View>
    )
}


export default WishScreen

const styles = StyleSheet.create({})