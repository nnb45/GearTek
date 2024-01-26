import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
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
    const _navigationCart = () => {
        navigation.navigate('ProductDetailScreen')
    }

    return (
        <View>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <Text>HomeScreen</Text>
            <Button
                onPress={_navigationSearch}
                title='search' />

            <Button
                onPress={_navigationShopnow}
                title='Shop now' />

            <Button
                onPress={_navigationCart}
                title='Detail' />
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({})