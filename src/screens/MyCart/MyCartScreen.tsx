import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Pressable, FlatList, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import Header from '../../components/Header/Header';
import { BIN, DELETE, IC_BACK, IC_MINUS, IC_NEXT, IC_PLUS } from '../../../assets/img';
interface cartProps {

    id: number,
    name: string,
    image: string,
    price: number,
}
type PropsType = NativeStackScreenProps<HomeStackParamList, 'MyCartScreen'>;
const MyCartScreen: React.FC<PropsType> = props => {
    const { navigation } = props
    const [quantity, setQuantity] = useState<number>(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
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
                                <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                                    <Image style={styles.quantityIcon} source={IC_MINUS} />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
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
                data={popularData}
                renderItem={_itemCart}
                showsHorizontalScrollIndicator={true}
                ListHeaderComponent={_listHeader} />
            <View style={styles.confirm}>
                <View style={styles.totalPrice}>
                    <Text style={styles.body}>Total Price</Text>
                    <Text style={styles.body}>USD 313</Text>
                </View>
                <Pressable style={styles.btnAdd} onPress={() => Alert.alert('Button pressed')}>
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
const popularData =
    [
        {
            "id": 1,
            "image": "https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw45c69ed4/JBL_TOUR_ONE_BLK_Hero.jpg?sw=270&sh=330&sm=fit&sfrm=png",
            "name": "Mozard IP-878",
            "price": 270,
            "rating": 4.6,
            "review": 10,
        },
        {
            "id": 2,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/3855bea1-137b-4394-bdbe-2af2682b06a1-jpg-v-1683792459683.png?v=1683864214557",
            "name": "JBL Live 660NC",
            "price": 120,
            "rating": 3.5,
            "review": 14,
        },

    ]