import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/HomeStack';
import WishStack from '../navigation/WishStack';
import ProfileStack from '../navigation/ProfileStack';
import MyCartStack from '../navigation/MyCartStack';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#0ACF83',
                tabBarInactiveTintColor: '#939393',
                tabBarStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 70,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/home_ac.png')}
                                    style={{ width: 30, height: 30 }} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/home.png')}
                                    style={{ width: 26, height: 26 }} />
                            )
                        }
                    } else if (route.name === 'WishList') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/favorite_ac.png')}
                                    style={{ width: 30, height: 30 }} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/favorite.png')}
                                    style={{ width: 26, height: 26 }} />
                            )
                        }
                    }
                    else if (route.name === 'Cart') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/cart_ac.png')}
                                    style={{ width: 30, height: 30 }} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/cart.png')}
                                    style={{ width: 26, height: 26 }} />
                            )
                        }
                    }
                    else if (route.name === 'Profile') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../assets/img/profile_ac.png')}
                                    style={{ width: 30, height: 30 }} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../assets/img/profile.png')}
                                    style={{ width: 26, height: 26 }} />
                            )
                        }
                    }
                },
            })}>
            <Tab.Screen name="Home" component={HomeStack}
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
                    tabBarLabel: 'Wishlist',
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