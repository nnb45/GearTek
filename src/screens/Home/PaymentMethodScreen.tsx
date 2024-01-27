import { ScrollView, StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import Header from '../../components/Header/Header';
import { IC_BACK, IC_CARD, IC_NEXT, IC_PLUS, MASTERCARD, VISA } from '../../../assets/img';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'PaymentMethodScreen'>;
const PaymentMethodScreen: React.FC<PropsType> = props => {

    return (
        <View style={styles.container}>
            <Header
                iconLeft={IC_BACK}
                title='Payment method'
                iconRight={IC_PLUS}
                isCheck={true} />

            <Text style={styles.title}>Select existing card</Text>
            <View style={styles.grTxtInput}>
                <Image source={IC_CARD} style={styles.icon} />
                <TextInput
                    placeholder='**** **** 3004 1975'
                    placeholderTextColor={color.Default}
                    editable={false}
                    style={styles.textInput} />
            </View>

            <View style={styles.line}></View>
            <Text style={styles.title}>Input a new card</Text>
            <View>
                <Text style={styles.title1}>Card number</Text>
                <View style={styles.grTxtInputRight}>
                    <TextInput
                        placeholder='XXXX XXXX XXXX XXXX'
                        placeholderTextColor={color.Default}
                        style={styles.textInput} />
                    <View style={styles.grIcon}>
                        <Image source={VISA} style={{ width: 37.6, height: 16 }} />
                        <Image source={MASTERCARD} style={{ width: 16, height: 16 }} />
                    </View>
                </View>
            </View>
            <View style={styles.grCardInfo}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titleInfo}>Exp date</Text>
                    <TextInput
                        placeholder='MM/YYYY'
                        placeholderTextColor={color.Grey}
                        style={styles.textInputInfo} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.titleInfo}>Security code</Text>
                    <TextInput
                        placeholder='CCV/CSV'
                        placeholderTextColor={color.Grey}
                        style={styles.textInputInfo} />
                </View>
            </View>
            <View style={styles.cardholder}>
                <Text style={styles.titleInfo}>Card holder name</Text>
                <TextInput
                    placeholder='Enter card holder name'
                    placeholderTextColor={color.Grey}
                    style={styles.textInputInfo} />
            </View>
            <View style={styles.totalPrice}>
                <Text style={styles.body}>Total Price</Text>
                <Text style={styles.body}>USD 313</Text>
            </View>
            <Pressable style={styles.btnAdd}>
                <Text style={styles.txtAdd}>Select Payment Method</Text>
                <Image source={IC_NEXT} style={{width: 25, height: 25}} />
            </Pressable>
        </View>
    )
}


export default PaymentMethodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White
    },
    title: {
        marginTop: 20,
        marginHorizontal: 24,
        fontFamily: 'DMSans-Medium',
        fontSize: 16,
        color: color.Default
    },
    grTxtInput: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 10,
        borderColor: color.Grey,
        borderWidth: 1,
        paddingStart: 15,
        gap: 12
    },
    icon: {
        width: 20,
        height: 20
    },
    textInput: {
        fontFamily: 'DMSans-Regular',
        fontSize: 12,
        width: 200
    },
    line: {
        marginTop: 20,
        height: 1,
        backgroundColor: color.Grey
    },
    grTxtInputRight: {
        fontFamily: 'DMSans-Regular',
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 10,
        borderColor: color.Grey,
        borderWidth: 1,
        paddingHorizontal: 15,
    },
    grIcon: {
        gap: 8,
        flexDirection: 'row'
    },
    title1: {
        marginTop: 20,
        marginHorizontal: 24,
        fontFamily: 'DMSans-Medium',
        fontSize: 14,
        color: color.GreyDark1
    },
    grCardInfo: {
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 24,
    },
    titleInfo: {
        marginTop: 20,
        fontFamily: 'DMSans-Medium',
        fontSize: 14,
        color: color.GreyDark1
    },
    textInputInfo: {
        fontFamily: 'DMSans-Regular',
        fontSize: 12,
        borderRadius: 10,
        borderColor: color.Grey,
        borderWidth: 1,
        paddingHorizontal: 15,
        marginTop: 8,
    },
    cardholder: {
        marginHorizontal: 24
    },
    totalPrice: {
        marginTop: 80,
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 24,
        justifyContent: 'space-between'
    },
    body: {
        fontFamily: 'DMSans-Bold',
        color: color.Default,
        fontSize: 14
    },
    btnAdd: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: color.Primary,
        justifyContent: 'space-between',
        borderRadius: 10,
        height: 'auto', 
        margin: 24,
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    txtAdd: {
        color: color.White,
        fontFamily: 'DMSans-Bold',
        fontSize: 14
    }
})