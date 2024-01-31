import { StyleSheet, Text, View, Dimensions, Image, FlatList, StatusBar, Pressable, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header';
import { IC_BACK, IMG_Product } from '../../../assets/img';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { Product } from '../../domain/enity/product';
import { useAppContext } from '../../components/context/AppContext';
import { RouteProp, useRoute } from '@react-navigation/native';
interface Details {
    productID: string,
    productName: string,
    productImages: string[],
    productPrice: Number,
}

type PropsType = NativeStackScreenProps<HomeStackParamList, 'ProductDetailScreen'>;
const ProductDetailScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const { products } = useAppContext();
    const [detail, setDetail] = useState<Details[]>([]);

    const route = useRoute<RouteProp<HomeStackParamList, 'HomeScreen'>>();
    const { productID, productName, productImages, productPrice } = route.params as Details;
    const getProductInfo = async () => {
        try {
            const response = await fetch(`https://geartekserver-production.up.railway.app/api/products/${productID}`);
            const data = await response.json();
            setDetail(data);
            console.log('Product details:', data);
            console.log('Product ID:', productID);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        getProductInfo();
    }, []);

    const _handleCart = () => {
        navigation.navigate('MyCartScreen');
    }
    const screenWidth = Dimensions.get('window').width;
    const _detail = () => {
        navigation.navigate('ProductDetailScreen');
    }
    console.log('Details data:', detail);
    const _renderItemImage = ({ item }: { item: Details }) => {
        console.log(item.productImages[0]);
        return (
            // <View>
            //     {item.productImages.map((image, index) => (
            //         <Image key={index} source={{ uri: image }} style={styles.image} />
            //     ))}
            // </View>
            <Image source={{ uri: item.productImages[0] }} style={styles.image} />
        )
    };

    const _renderItemMore = ({ item }: { item: Product }) => {
        return (
            <TouchableOpacity style={styles.sanpham} onPress={_detail}>
                <View>
                    <Image
                        source={{ uri: item.productImages[0] }}
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
                <Text style={styles.priceText}>USD {productPrice.toString()}</Text>
                <Text style={styles.titleText}>{productName}</Text>

                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoryText}>Overview</Text>
                    <Text style={styles.categoryText}>Features</Text>
                    <Text style={styles.categoryText}>Specification</Text>
                </View>

                <View style={styles.productList}>
                    <FlatList
                        data={detail}
                        renderItem={_renderItemImage}
                        keyExtractor={item => item.productID.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>


                <Text style={styles.reviewText}>Review (102)</Text>
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
                    <Text style={styles.categoryText}>See All</Text>
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
                <View style={{ marginVertical: 20, borderRadius: 10, height: 50 }}>
                    <Pressable style={styles.btnAdd} onPress={_handleCart}>
                        <Text style={styles.txtAdd}>Add to cart</Text>
                    </Pressable>
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
        height: 'auto',
        width: 285,
        marginRight: 20,
        resizeMode: 'cover',
        marginTop: 29,
        borderWidth: 1,
        borderColor: color.Default
    },
    productList: {
        height: 390,
        borderRadius: 10,
        resizeMode: 'cover',
        marginTop: 29,
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
    btnAdd: {
        alignItems: 'center',
        backgroundColor: color.Primary,
        justifyContent: 'center',
        borderRadius: 10,
        height: 50
    },
    txtAdd: {
        color: color.White,
        fontFamily: 'DMSans-Bold',
        fontSize: 16
    }
});