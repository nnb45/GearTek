import { Dimensions, FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IC_BACK } from '../../../assets/img';
import Header from '../../components/Header/Header';
import { useAppContext } from '../../components/context/AppContext';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { Product } from '../../domain/enity/product';
import { color } from '../../themes/theme';

interface Details {
    productID: string,
    productName: string,
    productImages: ProductImage[],
    productPrice: string,
    productReviews: string,
    productRates: string
    quantity: any
}
type ProductImage = {
    key: string;
    image: string;
};
type PropsType = NativeStackScreenProps<HomeStackParamList, 'ProductDetailScreen'>;
const ProductDetailScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const { products } = useAppContext();
    const [detail, setDetail] = useState<Details>({} as Details);
    const [images, setImages] = useState<ProductImage[]>();
    const route = useRoute();
    const { productID } = route.params as Details;
    const { addToCart, cart, setCart } = useAppContext();


    useEffect(() => {
        const getProductInfo = async () => {
            try {
                const response = await axios.get(`https://geartekserver-production.up.railway.app/api/products/${productID}`);
                const data: Details = response.data;
                setDetail(data);
                console.log('Product details:', data);
                setImages(data.productImages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        getProductInfo();
    }, []);

    const _handleReiceipt = () => {
        navigation.navigate('ReceiptScreen', {
            productID: productID,
            productName: detail.productName,
            productPrice: detail.productPrice,
            productImages: detail.productImages
        });
    };

    const screenWidth = Dimensions.get('window').width;

    const _renderItemImage = ({ item }: { item: ProductImage }) => {
        return (
            <Image
                key={item.key}
                source={{ uri: item.image }}
                style={styles.image}
                onError={(e) => console.log('Error loading image:', e)}
            />
        );
    };

    const _renderItemMore = ({ item }: { item: Product }) => {
        const _detail = () => {
            navigation.push('ProductDetailScreen', {
                productID: item._id,
                productName: item.productName,
                productImages: item.productImages,
                productPrice: item.productPrice,
                productReviews: item.productReviews
            });
        };
        return (
            <TouchableOpacity style={styles.sanpham} onPress={_detail}>
                <View>
                    <Image
                        source={{ uri: item.productImages[0].image }}
                        style={styles.img}
                    />
                </View>
                <View>
                    <Text style={styles.productName} ellipsizeMode='tail' numberOfLines={2}>{item.productName}</Text>
                </View>
                <View>
                    <Text style={styles.infor}>USD {item.productPrice.toString()}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    const footerComponent = ({ item, cart }: { item: Product, cart: Product[] }) => {
        const _cart = () => {
            addToCart(item);
            console.log("Item added to Cart : ", item);
            setCart([...cart, item]); // add item to cart state array
            navigation.navigate("MyCartScreen", { cart: item });
        };
        return (
            <View style={styles.buttonRow}>
                <Pressable style={styles.btnAdd} onPress={_cart}>
                    <Text style={styles.txtAdd}>Add to Cart</Text>
                </Pressable>
                <Pressable style={styles.btnBuy} onPress={_handleReiceipt}>
                    <Text style={styles.txtBuy}>Buy now</Text>
                </Pressable>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    title='Details'
                    iconLeft={IC_BACK}
                    styleContainer={{ backgroundColor: color.White, marginHorizontal: -24 }}
                    eventLeft={() => navigation.goBack()} />
                <Text style={styles.priceText}>USD {detail?.productPrice}</Text>
                <Text style={styles.titleText}>{detail?.productName}</Text>

                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoryText}>Overview</Text>
                    <Text style={styles.categoryText}>Features</Text>
                    <Text style={styles.categoryText}>Specification</Text>
                </View>

                <View style={styles.productList}>
                    <FlatList
                        data={images}
                        renderItem={_renderItemImage}
                        keyExtractor={(item) => item.key}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={(item) => footerComponent({ item, cart })}
                    />
                </View>
                <Text style={styles.reviewText}>Review ({detail.productReviews})</Text>
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewCol}>
                        <Image source={require('../../../assets/img/avatar.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.reviewColContent}>
                        <Text style={styles.reviewerNameText}>John Doe</Text>
                        <View style={styles.reviewStarsContainer}>
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                        </View>
                        <Text style={styles.reviewText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                    {/* Add more reviews here */}
                </View>
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewCol}>
                        <Image source={require('../../../assets/img/avatar.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.reviewColContent}>
                        <Text style={styles.reviewerNameText}>John Doe</Text>
                        <View style={styles.reviewStarsContainer}>
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                        </View>
                        <Text style={styles.reviewText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>

                    </View>

                    {/* Add more reviews here */}
                </View>
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewCol}>
                        <Image source={require('../../../assets/img/avatar.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.reviewColContent}>
                        <Text style={styles.reviewerNameText}>John Doe</Text>
                        <View style={styles.reviewStarsContainer}>
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                        </View>
                        <Text style={styles.reviewText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>

                    </View>
                    {/* Add more reviews here */}
                </View>
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewCol}>
                        <Image source={require('../../../assets/img/avatar.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.reviewColContent}>
                        <Text style={styles.reviewerNameText}>John Doe</Text>
                        <View style={styles.reviewStarsContainer}>
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                            <Icon name="star" size={30} color="gold" />
                        </View>
                        <Text style={styles.reviewText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: -24 }}>
                    <Text style={styles.seeAll}>See All Reviews</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.categoryText}>Another Product</Text>
                </View>
                <View style={{ flex: 1, marginTop: 20, borderRadius: 10, backgroundColor: color.GreyLight1 }}>
                    <FlatList
                        data={products}
                        renderItem={_renderItemMore}
                        keyExtractor={item => item._id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: color.White
    },

    priceText: {
        fontSize: 20,
        color: color.Primary,
        fontFamily: 'DMSans-Bold'
    },
    titleText: {
        marginTop: 6,
        fontSize: 28,
        fontFamily: 'DMSans-Bold',
        color: 'rgb(0, 0, 0)',
    },
    subtitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)',
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    categoryText: {
        marginTop: 29,
        fontSize: 16,
        fontFamily: 'DMSans-Regular',
        color: 'rgb(0, 0, 0)',
    },
    slideContainer: {
        marginTop: 20,
    },
    slide: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    textContent: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)',
    },
    image: {
        borderRadius: 10,
        height: 390,
        width: 285,
        marginRight: 20,
        resizeMode: 'cover',
        borderWidth: 1,
        borderColor: color.GreyLight1
    },
    productList: {
        height: 'auto',
        resizeMode: 'cover',
        marginTop: 29,
        justifyContent: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    reviewContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    reviewCol: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviewColContent: {
        flex: 1,
        marginLeft: 10,
    },
    reviewerNameText: {
        fontSize: 18,
        fontFamily: 'DMSans-Bold',
        color: color.Default,
        marginTop: 15
    },
    reviewStarsContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    reviewText: {
        fontSize: 16,
        fontFamily: 'DMSans-Regular',
        color: 'rgb(0, 0, 0)',
        marginTop: 20,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        marginTop: 20,
    },
    seeAll: {
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
        color: color.GreyDark1,
        marginTop: 20
    },
    containerSanPham: {
        justifyContent: 'center',
        width: 155,
        padding: 15,
        backgroundColor: color.White,
        margin: 10,
        borderRadius: 15
    },
    sanpham: {
        justifyContent: 'center',
        width: 155,
        padding: 15,
        backgroundColor: color.White,
        margin: 10,
        borderRadius: 15
    },
    img: {
        width: 135,
        height: 135,
        borderRadius: 12,
        margin: 8,
        alignSelf: 'center'
    },
    infor: {
        fontSize: 13,
        fontFamily: 'DMSans-Bold',
        color: 'black'
    },
    productName: {
        fontSize: 15,
        fontFamily: 'DMSans-Regular',
        color: 'black'
    },
    btnBuy: {
        marginVertical: 20,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.Primary,
        justifyContent: 'center',
    },
    txtBuy: {
        color: color.White,
        fontFamily: 'DMSans-Bold',
        fontSize: 16
    },
    btnAdd: {
        marginVertical: 20,
        width: 'auto',
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.Accent,
        justifyContent: 'center',
    },
    txtAdd: {
        color: color.Default,
        fontFamily: 'DMSans-Bold',
        fontSize: 16
    },
    buttonRow: {
        flex: 1,
        width: 200,
        flexDirection: 'column',
    }
});