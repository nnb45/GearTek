import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'ProductDetailScreen'>;
const ProductDetailScreen: React.FC<PropsType> = props => {

    return (
        <View>
            <Text>ProductDetailScreen</Text>
        </View>
    )
}


export default ProductDetailScreen

const styles = StyleSheet.create({})