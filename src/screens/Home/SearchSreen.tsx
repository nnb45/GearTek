import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { ClockIcons, LeftIcons, MoreIconVertical, SearchIcons, StartIcons, XIcons } from '../../../assets/icons';
import Header from '../../components/Header/Header';
import { Cart_Icon, IC_BACK } from '../../../assets/img';
type PropsType = NativeStackScreenProps<HomeStackParamList, 'SearchScreen'>;

//interface
interface historyProps {
    id: number,
    title: string
}
interface popularProps {
    id: number,
    image: string,
    name: string,
    price: number,
    rating: number,
    review: number
}

//render Item history search
const _itemHistorySearch = ({ item }: { item: historyProps }) => {
    return (
        <View style={styles.cardHistorySearch}>
            <View style={styles.itemHistorySearch}>
                <ClockIcons />
                <Text style={styles.txtHistory}>{item.title}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}>
                <XIcons />
            </TouchableOpacity>
        </View>
    )
}
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
                <Text style={styles.txtNameProduct}>{item.name}</Text>
                <Text style={styles.txtPriceProduct}>USD {item.price}</Text>
                <View style={styles.cardRating}>
                    <View style={styles.itemRating}>
                        <StartIcons />
                        <Text style={styles.txtRating}>{item.rating}</Text>
                    </View>
                    <Text style={styles.txtNumberReviews}>{item.review} Reviews</Text>
                    <MoreIconVertical />
                </View>
            </View>
        </View>
    )
}

const SearchScreen: React.FC<PropsType> = props => {
    const { navigation } = props

    //list header
    const _listHeader = () => {
        return (
            <View>
                <Header
                    styleContainer={{ backgroundColor: color.White, marginTop: 24, marginHorizontal: -24 }}
                    title='Search'
                    isCheck={true}
                    eventLeft={() => navigation.goBack()}
                    iconLeft={IC_BACK}
                    iconRight={Cart_Icon} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='Search headphone'
                    />
                    <View style={styles.iconSearch}>
                        <SearchIcons />
                    </View>
                </View>
                <View style={styles.historySearch}>
                    <Text style={styles.txtLastest}>Lastest search</Text>
                    <FlatList
                        data={dataHistory}
                        renderItem={_itemHistorySearch} />
                </View>
                <Text style={styles.txtPopular}>Popular product</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'light-content'}
                translucent={true}
                backgroundColor={'transparent'} />
            <View>
                <FlatList
                    data={popularData}
                    renderItem={_itemPopular}
                    ListHeaderComponent={_listHeader}
                    showsVerticalScrollIndicator={false} />
            </View>
        </View >
    )
}

export default SearchScreen
const styles = StyleSheet.create({
    txtNumberReviews: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginRight: 80
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
        justifyContent: 'space-between'
    },
    cardMoney: {
        marginLeft: 16
    },
    imgProduct: {
        width: 70,
        height: 70
    },
    itemPopular: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: color.GreyLight1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardPopular: {
        width: '100%',
        height: 100,
        flexDirection: 'row'
    },
    txtHistory: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginLeft: 12
    },
    itemHistorySearch: {
        flexDirection: 'row'
    },
    cardHistorySearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    txtLastest: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
    },
    historySearch: {
        marginTop: 20,
        marginBottom: 20
    },
    iconSearch: {
        marginLeft: 15
    },
    searchInput: {
        width: '100%',
        marginLeft: 37,
        position: 'absolute',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        color: color.ColorInput,
        fontFamily: 'DMSans-Regular',
    },
    txtSearch: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        color: 'black',
        fontFamily: 'DMSans-Bold'
    },
    inputContainer: {
        width: '100%',
        height: 52,
        borderColor: color.ColorInput,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: color.White,
        paddingHorizontal: 24
    }
})

//simple data 
const dataHistory =
    [
        {
            "id": 1,
            "title": "on-ea"
        }, {
            "id": 2,
            "title": "in-ea"
        }, {
            "id": 3,
            "title": "TMA2 Wireless"
        }, {
            "id": 4,
            "title": "Cable"
        }, {
            "id": 5,
            "title": "TMA-2 Move Wireless"
        }
    ]
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

