import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { MoreIconVertical, SliderIcons, StartIcons } from '../../../assets/icons';
import Header from '../../components/Header/Header';
import { Cart_Icon, IC_BACK, IC_CART } from '../../../assets/img';
type PropsType = NativeStackScreenProps<HomeStackParamList, 'ExploreScreen'>;

//interface
interface ProductProps {
    id: number,
    image: string,
    name: string,
    price: number,
    rating: number,
    review: number
}
//props
interface Props {
    options: string[];
}
//options flaslist
const options = ['Popularity', 'Newest', 'Most Expensive'];
//flaslist
const Flashlist: React.FC<Props> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleOptionPress = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <FlatList
            data={options}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => handleOptionPress(item)}
                    style={styles.cardList}>
                    <Text style={styles.txtTitle}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    );
};


const ExploreScreen: React.FC<PropsType> = props => {
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
    //render item card product
    const _itemCardProduct = ({ item }: { item: ProductProps }) => {
        return (
            <View style={styles.cardProduct}>
                <Image
                    style={styles.imgProduct}
                    source={{ uri: item.image }} />
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
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => handleLikeItem(item.id)}>
                            <Image
                                style={styles.iconHeart}
                                source={likedItems.includes(item.id) ? require('../../../assets/img/heart_ac.png') : require('../../../assets/img/heart.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    //list header
    const _listHeader = () => {
        return (
            <View style={styles.information}>
                <Header
                    styleContainer={{ backgroundColor: color.White, marginHorizontal: -24, marginTop: -20 }}
                    title='Explore'
                    isCheck={true}
                    eventLeft={() => navigation.goBack()}
                    iconLeft={IC_BACK}
                    iconRight={IC_CART} />
                <View style={styles.headerTitle}>
                    <Text style={styles.txtHeadphone}>Headphone</Text>
                    <Text style={styles.txtTma}>TMA Wireless</Text>
                </View>
                <View style={styles.cardFilter}>
                    <View style={styles.itemCardFilter}>
                        <SliderIcons />
                        <Text style={styles.txtFilter}>Filter</Text>
                    </View>
                    <Flashlist
                        options={options} />
                </View>

            </View>
        )
    }
    const { navigation } = props
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <View style={styles.containerProduct}>
                <FlatList
                    data={popularData}
                    renderItem={_itemCardProduct}
                    ListHeaderComponent={_listHeader}
                    numColumns={2}
                    showsHorizontalScrollIndicator={true} />
            </View>

        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    iconHeart: {
        // marginRight: 4
    },
    txtNumberReviews: {
        fontSize: 12,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginLeft: -4
    },
    txtRating: {
        fontSize: 12,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginLeft: -4
    },
    txtPriceProduct: {
        fontSize: 12,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Bold',
        marginBottom: 8
    },
    txtNameProduct: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginBottom: 4
    },
    itemRating: {
        flexDirection: 'row',
        marginBottom: 12
    },
    cardRating: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    cardMoney: {
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    imgProduct: {
        width: 120,
        height: 120,
        marginLeft: 16
    },
    cardProduct: {
        // width: 160,
        width: Dimensions.get('screen').width * 0.4,
        height: 220,
        borderRadius: 15,
        backgroundColor: color.White,
        marginLeft: 26,
        marginVertical: 14,
        alignItems: 'center',
    },
    containerProduct: {
        flex: 1,
        backgroundColor: color.GreyLight2,
        marginTop: 24,
    },
    txtTitle: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
    },
    cardList: {
        marginLeft: 24,
        fontSize: 14
    },
    txtFilter: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
    },
    itemCardFilter: {
        width: 100,
        height: 46,
        borderColor: color.ColorInput,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardFilter: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtTma: {
        fontSize: 24,
        lineHeight: 32,
        color: 'black',
        fontFamily: 'DMSans-Bold',
        marginTop: 12
    },
    txtHeadphone: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Regular'
    },
    headerTitle: {
        marginTop: 0
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24
    },
    information: {
        width: '100%',
        height: 240,
        backgroundColor: color.White,
        paddingHorizontal: 24,
    },
    container: {
        flex: 1,
        // width: Dimensions.get('screen').width * 0.8,
        backgroundColor: color.White,
    }
})
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
            "rating": 3.0,
            "review": 37
        },
        {
            "id": 4,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/9328c3a4-a235-4180-8a45-971caa35fbb3.jpg?v=1680821650753",
            "name": "JBL Tune 510BT",
            "price": 79,
            "rating": 4.0,
            "review": 80
        },
        {
            "id": 5,
            "image": "https://bizweb.dktcdn.net/100/445/497/products/51555166-0820-41ee-97ee-27041a997d6a.jpg?v=1684318476290",
            "name": "JBL Tune 750BTNC",
            "price": 300,
            "rating": 5.0,
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