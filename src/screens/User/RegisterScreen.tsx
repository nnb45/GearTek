import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground, StatusBar } from 'react-native'
import React, { useContext, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../components/navigation/LoginStack';
import { color } from '../../themes/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppContext } from '../../components/context/AppContext';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'RegisterScreen'>;
const RegisterScreen: React.FC<PropsType> = props => {
    const [passwork, setPasswork] = useState(true)

    //handle naviagtion regster
    const _navigationLoginScreen = () => {
        navigation.navigate('LoginScreen')
    }
    const { navigation } = props

    return (
        <ImageBackground
            source={require('../../../assets/img/imagenen.png')}
            style={styles.anhnen}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <StatusBar
                        barStyle={'light-content'}
                        translucent={true}
                        backgroundColor={'transparent'} />
                    <View style={styles.containerText}>
                        <Text style={styles.geartTek}>GearTek</Text>
                        <Text style={styles.text}>It's modular and designal to last</Text>
                    </View>
                    <View style={{ height: 150 }}></View>
                    <View style={styles.inputcontainer}>
                        <View style={styles.way}>
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                placeholderTextColor={color.Grey} />

                            <TouchableOpacity
                                style={styles.gmailImage}>
                                <Image
                                    source={require('../../../assets/img/mail.png')}
                                    style={styles.gmailicon} />
                            </TouchableOpacity>
                        </View>


                        <View style={styles.way}>
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                placeholderTextColor={color.Grey}
                                secureTextEntry={passwork} />

                            <TouchableOpacity
                                style={styles.gmailImage}>
                                <Image
                                    source={require('../../../assets/img/lock.png')}
                                    style={styles.gmailicon} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonLabel}>Sign Up</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 25 }}>
                            <TouchableOpacity style={styles.icon} >
                                <Image
                                    source={require('../../../assets/img/icon_facebook.png')}
                                    style={styles.fake} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.icon} >
                                <Image
                                    source={require('../../../assets/img/icon_google.png')}
                                    style={styles.google} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.here}>
                            <Text style={styles.account}>If you have an account?{' '}</Text>
                            <TouchableOpacity
                                onPress={_navigationLoginScreen}>
                                <Text style={styles.signup}>Sign Up here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
}


export default RegisterScreen

const styles = StyleSheet.create({
    google: {
        width: 20,
        height: 20,
        margin: 15,
        marginHorizontal: 20,
        marginVertical: 17,
    },
    fake: {
        width: 12,
        height: 25,
        marginHorizontal: 25,
        marginVertical: 17,

    },
    icon: {
        backgroundColor: color.White,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 15
    },
    gmailicon: {
        width: 20,
        height: 20,
    },
    gmailImage: {
        width: 30,
        height: 18,
        position: 'absolute',
        paddingVertical: 15,
        marginStart: 15
    },
    signup: {
        textDecorationLine: 'underline',
        color: color.Primary,
        fontFamily: 'DMSans-Medium'
    },
    here: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35
    },
    account: {
        textAlign: 'center',
        color: color.White,
        fontFamily: 'DMSans-Medium'
    },
    buttonLabel: {
        color: color.White,
        fontSize: 16,
        fontFamily: 'DMSans-Medium',
        lineHeight: 26,
        letterSpacing: 1
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: color.Primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgot: {
        textAlign: 'center',
        color: color.White,
        fontFamily: 'DMSans-Medium'
    },
    way: {
        marginBottom: 25,
        color: color.Grey
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: color.White,
        borderRadius: 8,
        paddingHorizontal: 17,
        justifyContent: 'center',
        paddingVertical: 11,
        paddingLeft: 40,
        fontFamily: 'DMSans-Regular',
        color: color.Grey
    },
    inputcontainer: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: color.White,
        fontFamily: 'DMSans-Medium'
    },
    geartTek: {
        fontSize: 40,
        color: color.White,
        alignItems: 'center',
        fontFamily: 'DMSans-Bold'
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerText: {
        paddingVertical: 90,
        alignItems: 'center',
    },
    anhnen: {
        flex: 1
    }
})