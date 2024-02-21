import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ExploreScreen from '../../screens/Home/ExploreScreen';
import HomeScreen from '../../screens/Home/HomeScreen';
import PaymentMethodScreen from '../../screens/Home/PaymentMethodScreen';
import PaymentStatusScreen from '../../screens/Home/PaymentStatusScreen';
import ProductDetailScreen from '../../screens/Home/ProductDetailScreen';
import ReceiptProductScreen from '../../screens/Home/ReceiptProductScreen';
import ReceiptScreen from '../../screens/Home/ReceiptScreen';
import SearchScreen from '../../screens/Home/SearchSreen';
import MyCartScreen from '../../screens/MyCart/MyCartScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';


type HomeScreenProps = {};
type SearchScreenProps = {};
type ExploreScreenProps = {};
type ProductDetailProps = {};
type ProfileScreenProps = {};
type MyCartScreenProps = {};
type PaymentMethodScreenProps = {};
type PaymentStatusScreenProps = {};
type ReceiptScreenProps = {};
type ReceiptProductScreenProps = {};


export type HomeStackParamList = {
    HomeScreen: HomeScreenProps | undefined;
    SearchScreen: SearchScreenProps | undefined;
    ExploreScreen: ExploreScreenProps | undefined;
    ProfileScreen: ProfileScreenProps | undefined;
    ProductDetailScreen: ProductDetailProps | undefined;
    MyCartScreen: MyCartScreenProps | undefined;
    PaymentMethodScreen: PaymentMethodScreenProps | undefined;
    PaymentStatusScreen: PaymentStatusScreenProps | undefined;
    ReceiptScreen: ReceiptScreenProps | undefined;
    ReceiptProductScreen: ReceiptProductScreenProps | undefined;
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
            <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} />
            <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
            <Stack.Screen name="ReceiptProductScreen" component={ReceiptProductScreen} />
        </Stack.Navigator >
    )
}

export default HomeStack
