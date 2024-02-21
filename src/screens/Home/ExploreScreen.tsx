import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SliderIcons, StartIcons } from '../../../assets/icons';
import { IC_BACK, IC_CART } from '../../../assets/img';
import Header from '../../components/Header/Header';
import { useAppContext } from '../../components/context/AppContext';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { Product } from '../../domain/enity/product';
import { color } from '../../themes/theme';
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
    const [likedItems, setLikedItems] = useState<String[]>([]);

    //call api
    const { products, setProducts } = useAppContext();


    const getProductList = async () => {
        try {
            const response = await fetch('https://geartekserver-production.up.railway.app/api/products');
            const data: Product[] = await response.json();
            setProducts(data);
            console.log('Product data:', data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        getProductList();
    }, []);

    //handle like and unlike
    const handleLikeItem = (itemId: string) => {
        if (likedItems.includes(itemId)) {
            // Nếu mục đã được thích, loại bỏ khỏi mảng
            setLikedItems(likedItems.filter((id) => id !== itemId));
        } else {
            // Nếu mục chưa được thích, thêm vào mảng
            setLikedItems([...likedItems, itemId]);
        }
    };
    //render item card product
    const _itemCardProduct = ({ item }: { item: Product }) => {

        return (
            <View style={styles.cardProduct}>
                {item.productImages && item.productImages.length > 0 && (
                    <Image source={{ uri: item.productImages[0].image }} style={styles.imgProduct} resizeMode='cover' />
                )}

                <View style={styles.cardMoney}>
                    <Text style={styles.txtNameProduct} numberOfLines={1}
                        ellipsizeMode='tail'>{item.productName}</Text>
                    <Text style={styles.txtPriceProduct}>USD {item.productPrice.toString()}</Text>
                    <View style={styles.cardRating}>

                        <View style={styles.itemRating}>
                            <StartIcons />
                            <Text style={styles.txtRating}>{item.productRates.toString()}</Text>
                        </View>
                        <View>
                            <Text style={styles.txtNumberReviews}>({item.productReviews.toString()} Reviews)</Text>
                        </View>


                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => handleLikeItem(item._id)}>
                                <Image
                                    source={likedItems.includes(item._id) ? require('../../../assets/img/heart_ac.png') : require('../../../assets/img/heart.png')} />
                            </TouchableOpacity>
                        </View>

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
                    data={products}
                    renderItem={_itemCardProduct}
                    ListHeaderComponent={_listHeader}
                    numColumns={2}
                    showsVerticalScrollIndicator={false} />
            </View>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    iconHeart: {
        marginRight: -8
    },
    txtNumberReviews: {
        fontSize: 12,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginLeft: -8
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
        width: '100%',
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
        alignItems: 'center',
        borderRadius: 10
    },
    cardProduct: {
        width: 160,
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
        backgroundColor: color.White,
    }
})
