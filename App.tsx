import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileScreen from './src/screens/ProfileScreen'
import { color } from './src/themes/theme'

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
            <Image source={require('../GearTek/assets/img/TMA-2.png')}/>
            <Text style={styles.title}>hahah</Text>
        </View>
    )
}

export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
    },
    title: {
        fontFamily: 'DMSans-Medium',
        color: color.Primary,
        fontSize: 24
    }
})