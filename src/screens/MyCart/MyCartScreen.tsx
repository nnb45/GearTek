import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import Header from '../../components/Header/Header';
import { BIN, DELETE, IC_BACK, IC_MINUS, IC_NEXT, IC_PLUS } from '../../../assets/img';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'MyCartScreen'>;
const MyCartScreen: React.FC<PropsType> = props => {
    const [quantity, setQuantity] = useState<number>(1);
    const {navigation} = props
    const _handleProceed = () :any => {
        navigation.navigate('ReceiptScreen');
    }

    return (
        <View style={styles.container}>
            <Header
                title='My Cart'
                iconLeft={IC_BACK}
                iconRight={BIN}
                isCheck={true} />
            <View style={styles.item}>
                <View style={styles.itemImage}>
                    <Image
                        source={require('../../../assets/img/APTX.png')}
                        style={styles.image}
                    />
                    <View style={styles.itemInfo}>
                        <Text style={styles.name}>TMA-2 Comfort Wireless</Text>
                        <Text style={styles.price}>USD 270</Text>
                        <View style={styles.itemOption}>
                            <View style={styles.quantityControl}>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => (quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1))}>
                                    <Image style={styles.quantityIcon} source={IC_MINUS} />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => setQuantity(quantity + 1)}>
                                    <Image style={styles.quantityIcon} source={IC_PLUS} />
                                </TouchableOpacity>
                            </View>
                            <Image source={DELETE} style={styles.quantityIcon} />
                        </View>
                    </View>
                </View>
                <View style={styles.itemImage}>
                    <Image
                        source={require('../../../assets/img/APTX.png')}
                        style={styles.image}
                    />
                    <View style={styles.itemInfo}>
                        <Text style={styles.name}>TMA-2 Comfort Wireless</Text>
                        <Text style={styles.price}>USD 270</Text>
                        <View style={styles.itemOption}>
                            <View style={styles.quantityControl}>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => (quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1))}>
                                    <Image style={styles.quantityIcon} source={IC_MINUS} />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => setQuantity(quantity + 1)}>
                                    <Image style={styles.quantityIcon} source={IC_PLUS} />
                                </TouchableOpacity>
                            </View>
                            <Image source={DELETE} style={styles.quantityIcon} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.confirm}>
                <View style={styles.totalPrice}>
                    <Text style={styles.body}>Total Price</Text>
                    <Text style={styles.body}>USD 313</Text>
                </View>
                <Pressable style={styles.btnAdd} onPress={_handleProceed}>
                    <Text style={styles.txtAdd}>Proceed to Checkout</Text>
                    <Image source={IC_NEXT} style={{ width: 25, height: 25 }} />
                </Pressable>
            </View>
        </View>
    )
}
export default MyCartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White
    },
    item: {
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 24,
        gap: 35,
    },
    itemImage: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    itemInfo: {
        flex: 1
    },
    name: {
        color: color.Default,
        fontSize: 16,
        fontFamily: 'DMSans-Regular',
    },
    price: {
        marginTop: 5,
        fontSize: 14,
        color: color.Default,
        fontFamily: 'DMSans-Bold',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    quantity: {
        fontFamily: 'DMSans-Regular',
        fontSize: 16,
        color: color.Default
    },
    quantityButton: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.Grey,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityIcon: {
        width: 20,
        height: 20
    },
    itemOption: {
        marginTop: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    confirm: {
        flex: 0
    },
    totalPrice: {
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
});