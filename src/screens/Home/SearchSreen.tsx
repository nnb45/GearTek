import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { ClockIcons, LeftIcons, MoreIconVertical, SearchIcons, StartIcons, XIcons } from '../../../assets/icons';
import Header from '../../components/Header/Header';
import { Cart_Icon, IC_BACK, IC_MORE, IC_STAR } from '../../../assets/img';
import axios from 'axios';
import { Product } from '../../domain/enity/product';




type PropsType = NativeStackScreenProps<HomeStackParamList, 'SearchScreen'>;
const SearchScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [text, setText] = useState<string>('')
    const [searchResult, setSearchResults] = useState<Product[]>([]);

    const handleSearch = useCallback(async () => {
        try {
            const response = await axios.get(
                `https://geartekserver-production.up.railway.app/api/products/search?name=${text}`
            );
            const data: Product[] = response.data;
            console.log('Search text: ', text);
            console.log('Result:', data);
            // Update the search results state
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    }, [text]); // Add the `text` dependency here
    //render item Result
    const _itemResult = useCallback(({ item }: { item: Product }) => {
        const _detail = () => {
            navigation.navigate('ProductDetailScreen', {
                productID: item._id,
            });
        }
        return (
            <TouchableOpacity style={styles.cardPopular} onPress={_detail}>
                <View style={styles.itemPopular}>
                    <Image
                        style={styles.imgProduct}
                        source={{ uri: item.productImages[0] }} />
                </View>
                <View style={styles.cardMoney}>
                    <Text style={styles.txtNameProduct} numberOfLines={1} ellipsizeMode='tail'>{item.productName}</Text>
                    <Text style={styles.txtPriceProduct}>USD {item.productPrice.toString()}</Text>
                    <View style={styles.cardRating}>
                        <View style={styles.itemRating}>
                            <Image
                                style={{ width: 16, height: 16 }}
                                source={IC_STAR} />
                            <Text style={styles.txtRating}>{item.productRates.toString()}</Text>
                        </View>
                        <Text style={styles.txtNumberReviews}>({item.productReviews.toString()} Reviews)</Text>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={IC_MORE} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <View>
                <Header
                    styleContainer={{ backgroundColor: color.White, marginHorizontal: -24 }}
                    title='Search'
                    isCheck={true}
                    eventLeft={() => navigation.goBack()}
                    iconLeft={IC_BACK}
                    iconRight={Cart_Icon} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.searchInput, {
                            fontFamily: text ? 'DMSans-Medium' : 'DMSans-Regular',
                            fontSize: text ? 16 : 14,
                            color: text ? color.Default : color.Grey,
                        }]}
                        placeholder='Search product'
                        value={text}
                        blurOnSubmit={true}
                        onChangeText={setText}
                        onSubmitEditing={handleSearch}
                    />
                    <View style={styles.iconSearch}>
                        <SearchIcons />
                    </View>
                </View>
                {/* <View style={styles.historySearch}>
                    <Text style={styles.txtLastest}>Lastest search</Text>
                    <FlatList
                        data={dataHistory}
                        renderItem={_itemHistorySearch} />
                </View> */}
                <Text style={styles.txtPopular}>Search Results:</Text>
                {text && (
                    <FlatList
                        data={searchResult}
                        renderItem={_itemResult}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item._id}
                        extraData={searchResult}
                    />
                )}
            </View>
        </View >
    )
}

export default SearchScreen
const styles = StyleSheet.create({
    txtNumberReviews: {
        flex: 1,
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginStart: 10,
    },
    txtRating: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
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
        marginBottom: 5
    },
    txtPopular: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
        marginVertical: 20
    },
    itemRating: {
        gap: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardMoney: {
        flex: 1,
    },
    imgProduct: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
    },
    itemPopular: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: color.GreyLight1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardPopular: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
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
