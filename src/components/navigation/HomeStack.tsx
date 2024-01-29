import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import SearchScreen from '../../screens/Home/SearchSreen';
import ExploreScreen from '../../screens/Home/ExploreScreen';
import ProductDetailScreen from '../../screens/Home/ProductDetailScreen';
import PaymentMethodScreen from '../../screens/Home/PaymentMethod';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import PaymentStatusScreen from '../../screens/Home/PaymentStatusScreen';

type HomeScreenProps = {};
type SearchScreenProps = {};
type ExploreScreenProps = {};
type ProductDetailProps = {};
type ProfileScreenProps = {};
type MyCartScreenProps = {};
type PaymentMethodScreenProps = {};
type PaymentStatusScreenProps = {};
export type HomeStackParamList = {
    HomeScreen: HomeScreenProps | undefined;
    SearchScreen: SearchScreenProps | undefined;
    ExploreScreen: ExploreScreenProps | undefined;
    ProfileScreen: ProfileScreenProps | undefined;
    ProductDetailScreen: ProductDetailProps | undefined;
    MyCartScreen: MyCartScreenProps | undefined;
    PaymentMethodScreen: PaymentMethodScreenProps | undefined;
    PaymentStatusScreen: PaymentStatusScreenProps | undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
            <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
            <Stack.Screen name="PaymentStatusScreen" component={PaymentStatusScreen} />
        </Stack.Navigator >
    )
}

export default HomeStack
