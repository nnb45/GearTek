import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WishStackParamList } from '../../components/navigation/WishStack';
import { color } from '../../themes/theme';
import Header from '../../components/Header/Header';
import { IC_BACK } from '../../../assets/img';
import { MoreIconVertical, StartIcons } from '../../../assets/icons';

type PropsType = NativeStackScreenProps<WishStackParamList, 'WishScreen'>;

interface popularProps {
    id: number,
    image: string,
    name: string,
    price: number,
    rating: number,
    review: number
}

const WishScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const _handleCart = () => {
        navigation.navigate('MyCartScreen');
    }

    const [likedItems, setLikedItems] = useState<number[]>([]);
    const handleLikeItem = (itemId: number) => {
        if (likedItems.includes(itemId)) {
            // Nếu mục đã được thích, loại bỏ khỏi mảng
            setLikedItems(likedItems.filter((id) => id !== itemId));
        } else {
            // Nếu mục chưa được thích, thêm vào mảng
            setLikedItems([...likedItems, itemId]);
        }
    };
    //render item Popular
    const _itemPopular = ({ item }: { item: popularProps }) => {
        return (
            <View style={styles.cardPopular}>
                <View style={styles.itemPopular}>
                    <Image
                        style={styles.imgProduct}
                        source={{ uri: item.image }} />
                </View>
                <View style={styles.cardMoney}>
                    <Text style={styles.txtNameProduct} numberOfLines={1}
                        ellipsizeMode='tail'>{item.name}</Text>
                    <Text style={styles.txtPriceProduct}>USD {item.price}</Text>
                    <View style={styles.cardRating}>
                        <View style={styles.itemRating}>
                            <StartIcons />
                            <Text style={styles.txtRating}>{item.rating}</Text>
                        </View>
                        <Text style={styles.txtNumberReviews}>({item.review} Reviews)</Text>
                    </View>
                    <View style={styles.options}>
                        <Pressable style={styles.btnAdd} onPress={_handleCart}>
                            <Text style={styles.txtAdd}>Add to cart</Text>
                        </Pressable>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => handleLikeItem(item.id)}>
                            <Image
                                style={styles.iconHeart}
                                source={likedItems.includes(item.id) ? require('../../../assets/img/heart.png') : require('../../../assets/img/heart_ac.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
    //lít header
    const _listHeader = () => {
        return (
            <Header
                styleContainer={{ backgroundColor: color.White, marginHorizontal: -24 }}
                title=' WishList'
                isCheck={true}
                eventLeft={() => navigation.goBack()}
                iconLeft={IC_BACK} />
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <FlatList
                data={popularData}
                renderItem={_itemPopular}
                ListHeaderComponent={_listHeader}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={true} />
        </View>
    )
}


export default WishScreen

const styles = StyleSheet.create({
    iconHeart: {
        marginRight: 24
    },
    txtAdd: {
        fontSize: 14,
        fontFamily: 'DMSans-Bold',
        color: color.White
    },
    btnAdd: {
        width: 120,
        height: 36,
        borderRadius: 8,
        backgroundColor: color.Primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    options: {
        width: '85%',
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtNumberReviews: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
    },
    txtRating: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginRight: 24
    },
    txtPriceProduct: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Bold',
        marginBottom: 12
    },
    txtNameProduct: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginBottom: 6
    },
    txtPopular: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
        marginBottom: 20
    },
    itemRating: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardRating: {
        flexDirection: 'row',
    },
    cardMoney: {
        marginLeft: 16
    },
    imgProduct: {
        width: 100,
        height: 130
    },
    itemPopular: {
        width: 100,
        height: 130,
        borderRadius: 10,
        backgroundColor: color.GreyLight1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardPopular: {
        width: '100%',
        height: 160,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: color.White,
        paddingHorizontal: 24
    }
})

//data popular
const popularData =
    [
        {
            "id": 1,
            "image": "https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw45c69ed4/JBL_TOUR_ONE_BLK_Hero.jpg?sw=270&sh=330&sm=fit&sfrm=png",
            "name": "Mozard IP-878",
            "price": 270,
            "rating": 4.6,
            "review": 10
        },
        {
            "id": 2,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/3855bea1-137b-4394-bdbe-2af2682b06a1-jpg-v-1683792459683.png?v=1683864214557",
            "name": "JBL Live 660NC",
            "price": 120,
            "rating": 3.5,
            "review": 14
        },
        {
            "id": 3,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/f5670b47-612b-4160-a1b2-3c9693371a5e.jpg?v=1680821388590",
            "name": "Gaming JBL QUANTUM TWS",
            "price": 242,
            "rating": 3.2,
            "review": 37
        },
        {
            "id": 4,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/9328c3a4-a235-4180-8a45-971caa35fbb3.jpg?v=1680821650753",
            "name": "JBL Tune 510BT",
            "price": 79,
            "rating": 4.8,
            "review": 80
        },
        {
            "id": 5,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/51555166-0820-41ee-97ee-27041a997d6a.jpg?v=1684318476290",
            "name": "JBL Tune 750BTNC",
            "price": 300,
            "rating": 5.4,
            "review": 47
        },
        {
            "id": 6,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/746bd0f1-0767-49d7-afad-83ca63af1100.jpg?v=1683864470510",
            "name": "JBL Live 460NC",
            "price": 239,
            "rating": 4.5,
            "review": 60
        }
    ]