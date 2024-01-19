import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/HomeStack';
import WishStack from '../navigation/WishStack';
import ProfileStack from '../navigation/ProfileStack';
import MyCartStack from '../navigation/MyCartStack';
import { color } from '../../themes/theme';


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 5,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/home_ac.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/home.png')} />
                            )
                        }
                    } else if (route.name === 'WishList') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/favorite_ac.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/favorite.png')} />
                            )
                        }
                    }
                    else if (route.name === 'Cart') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/cart_ac.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/cart.png')} />
                            )
                        }
                    }
                    else if (route.name === 'Profile') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/profile_ac.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/profile.png')} />
                            )
                        }
                    }
                },
            })}>
            <Tab.Screen name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Regular',
                        marginBottom: 10,
                    },
                }} />
            <Tab.Screen name="WishList" component={WishStack}
                options={{
                    tabBarLabel: 'WishList',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Regular',
                        marginBottom: 10,
                    },
                }} />
            <Tab.Screen name="Cart" component={MyCartStack}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Regular',
                        marginBottom: 10,
                    },
                }} />
            <Tab.Screen name="Profile" component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Regular',
                        marginBottom: 10,
                    },
                }} />

        </Tab.Navigator>
    );
}

export default BottomNavigation