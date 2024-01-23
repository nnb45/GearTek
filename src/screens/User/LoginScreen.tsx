import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../components/navigation/LoginStack';
import { color } from '../../themes/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



type PropsType = NativeStackScreenProps<LoginStackParamList, 'LoginScreen'>;
const LoginScreen: React.FC<PropsType> = props => {
    const [passwork, setPasswork] = useState(true)

    return (
        <ImageBackground
            source={require('../../../assets/img/imagenen.png')}
            style={styles.anhnen}>

            <View style={styles.container}>

                <View style={styles.containerText}>
                    <Text style={styles.geartTek}>GeartTek</Text>
                    <Text style={styles.text}>It's modular and designal to last</Text>
                </View>

                <View style={styles.inputcontainer}>
                    <View style={styles.way}>
                        <TextInput
                            style={styles.input}
                            placeholder='Email address' />

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
                            placeholder='Passwork'
                            secureTextEntry={passwork} />

                        <TouchableOpacity
                            style={styles.gmailImage}>
                            <Image
                                source={require('../../../assets/img/lock.png')}
                                style={styles.gmailicon} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.forgot}>Forgot Passwork</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonLabel}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={styles.here}>
                        <Text style={styles.account}>Didn't have any account?{' '}</Text>
                        <TouchableOpacity >
                            <Text style={styles.signup}>Sign Up here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    gmailicon: {
        width: 22,
        height: 22,
    },
    gmailImage: {
        width: 30,
        height: 18,
        position: 'absolute',
        top: 13.5,
        left: 8
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
        marginVertical: 30,
    },
    forgot: {
        textAlign: 'center',
        color: color.White,
        fontFamily: 'DMSans-Medium'
    },
    way: {
        marginBottom: 25
    },
    input: {
        width: '100%',
        height: 48,
        backgroundColor: color.White,
        borderRadius: 8,
        paddingHorizontal: 17,
        paddingVertical: 11,
        paddingLeft: 40,
        fontFamily: 'DMSans-Medium'
    },
    inputcontainer: {
        width: '100%',
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
    anhnen:{
        flex: 1
    }
})