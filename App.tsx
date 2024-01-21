import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import ProfileScreen from './src/screens/Profile/ProfileScreen'
import ProductCart from './src/screens/Home/ProductCart'
import SanPham from './src/screens/Home/sanpham'
import LoginScreen from './src/screens/User/LoginScreen'
import Cart from './src/screens/Home/Cart'
import { color } from './src/themes/theme'

const App = () => {
    return (
       <SafeAreaView style={{flex: 1}}>
                <Cart/>
              {/* <ProductCart/> */}
              {/* <LoginScreen/> */}
       </SafeAreaView>
    )
}

export default App

