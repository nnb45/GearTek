import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BIN, DELETE, IC_BACK, IC_MINUS, IC_NEXT, IC_PLUS } from '../../../assets/img';
import Header from '../../components/Header/Header';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { useRoute } from '@react-navigation/native';
interface cartProps {
    quantity: any,
    id: number,
    name: string,
    image: string,
    price: number,
}
type PropsType = NativeStackScreenProps<HomeStackParamList, 'MyCartScreen'>;
const MyCartScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [cartData, setCartData] = useState<cartProps[]>([]);

    const _handleCheckout = () => {
        navigation.navigate('ReceiptScreen')
    }
    const [quantity, setQuantity] = useState<number>(1);

    const decreaseQuantity = (item: cartProps, cartData: cartProps[]) => {
        const newCartData = cartData.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
        setCartData(newCartData);
    };

    const increaseQuantity = (item: cartProps, cartData: cartProps[]) => {
        const newCartData = cartData.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        setCartData(newCartData);
    };
    //item cart
    const _itemCart = ({ item }: { item: cartProps }) => {
        return (
            <View style={styles.item}>
                <View style={styles.itemImage}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                    <View style={styles.itemInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price} USD</Text>
                        <View style={styles.itemOption}>
                            <View style={styles.quantityControl}>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item, cartData)}>
                                    <Image style={styles.quantityIcon} source={IC_MINUS} />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item, cartData)}>
                                    <Image style={styles.quantityIcon} source={IC_PLUS} />
                                </TouchableOpacity>
                            </View>
                            <Image source={DELETE} style={styles.quantityIcon} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    //list header
    const _listHeader = () => {
        return (
            <Header
                title='My Cart'
                iconLeft={IC_BACK}
                iconRight={BIN}
                isCheck={true}
                eventLeft={() => navigation.goBack()} />
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <FlatList
                data={cartData}
                renderItem={_itemCart}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={_listHeader} />
            <View style={styles.confirm}>
                <View style={styles.totalPrice}>
                    <Text style={styles.body}>Total Price</Text>
                    <Text style={styles.body}>USD 313</Text>
                </View>
                <Pressable style={styles.btnAdd} onPress={_handleCheckout}>
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
        backgroundColor: color.White,
    },
    item: {
        flex: 1,
        marginBottom: 24,
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
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: color.GreyLight1
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
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    confirm: {
        flex: 0,
        marginTop: 8
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