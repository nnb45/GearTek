import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartIcons, CartIcons_active, FavoriteIcons, FavoriteIcons_active, HomeIcons, HomeIcons_active, ProfileIcons, ProfileIcons_active } from '../../../assets/icons';
import HomeStack from '../navigation/HomeStack';
import WishStack from '../navigation/WishStack';
import ProfileStack from '../navigation/ProfileStack';


const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 30,
                    fontFamily: 'DMSans-Bold',
                },
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 5,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                },

                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            focused ? (
                                <View>
                                    <HomeIcons_active/>
                                </View>
                            ) : (
                                <HomeIcons/>
                            )
                        );
                    } else if (route.name === 'WishList') {
                        return (
                            focused ? (
                                <View>
                                   <FavoriteIcons_active/>
                                </View>
                            ) : (
                                <FavoriteIcons/>
                            )

                        );
                    } else if (route.name === 'Cart') {
                        return (
                            focused ? (
                                <View>
                                    <CartIcons_active/>
                                </View>
                            ) : (
                                <CartIcons/>
                            )
                        );
                    } else if (route.name === 'Profile') {
                        return (
                            focused ? (
                                <View>
                                    <ProfileIcons_active/>
                                </View>
                            ) : (
                                <ProfileIcons/>
                            )
                        );
                    }
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Bold',
                        marginBottom: 15,
                    },
                }}
            />
            <Tab.Screen
                name="WishList"
                component={WishStack}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Bold',
                        marginBottom: 15,
                    },
                }}
            />
            <Tab.Screen
                name="Cart"
                component={WishStack}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Bold',
                        marginBottom: 15,
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'DMSans-Bold',
                        marginBottom: 15,
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigation