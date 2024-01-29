import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;
const HomeScreen: React.FC<PropsType> = props => {

    const { navigation } = props;
    //handle navi
    const _navigationSearch = () => {
        navigation.navigate('SearchScreen')
    }
    const _navigationShopnow = () => {
        navigation.navigate('ExploreScreen')
    }
    const _navigationPaymentStatus = () => {
        navigation.navigate('PaymentStatusScreen')
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                onPress={_navigationSearch}
                title='search' />

            <Button
                onPress={_navigationShopnow}
                title='Shop now' />
            <Button
                onPress={_navigationPaymentStatus}
                title='Payment' />
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({})