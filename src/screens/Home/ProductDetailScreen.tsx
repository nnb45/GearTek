import { StyleSheet, Text, View, ScrollView, Dimensions, Image, FlatList, Button, Alert, ImageProps, ImageSourcePropType, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header/Header';
import { IC_BACK, IMG_Product } from '../../../assets/img';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';

interface Product {
    id: number,
    image: string
}
interface Product2 {
    id: number,
    image: string
}

type PropsType = NativeStackScreenProps<HomeStackParamList, 'ProductDetailScreen'>;
const ProductDetailScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const data: Product[] = [
        {
            id: 1,
            image: "https://bizweb.dktcdn.net/100/445/497/products/51555166-0820-41ee-97ee-27041a997d6a.jpg?v=1684318476290",
        },
        {
            id: 2,
            image: "https://bizweb.dktcdn.net/100/445/497/products/746bd0f1-0767-49d7-afad-83ca63af1100.jpg?v=1683864470510",
        },
        {
            id: 3,
            image: "https://bizweb.dktcdn.net/100/445/497/products/746bd0f1-0767-49d7-afad-83ca63af1100.jpg?v=1683864470510",
        },
        {
            id: 4,
            image: "https://bizweb.dktcdn.net/100/445/497/products/746bd0f1-0767-49d7-afad-83ca63af1100.jpg?v=1683864470510",

        }
    ];
    const [productImage, setProductImage] = useState<Product[]>([]);
    const screenWidth = Dimensions.get('window').width;
    const _renderItemImage = ({ item }: { item: Product }) => {
        return (
            <Image source={{ uri: item.image }} style={styles.image} />
        )
    };
    const _renderItemMore = ({ item }: { item: Product2 }) => {
        return (
            <Image source={{ uri: item.image }} style={styles.image} />
        )
    };
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'} />
            <ScrollView showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}>
                <Header
                    title='Details'
                    iconLeft={IC_BACK}
                    styleContainer={{ backgroundColor: color.White, marginHorizontal: -24 }}
                    eventLeft={() => navigation.goBack()} />
                <Text style={styles.priceText}>USD 350</Text>
                <Text style={styles.titleText}>TMA-2 HD WIRELESS</Text>

                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoryText}>Overview</Text>
                    <Text style={styles.categoryText}>Features</Text>
                    <Text style={styles.categoryText}>Specification</Text>
                </View>

                <View style={styles.productList}>
                    <FlatList
                        data={data}
                        renderItem={_renderItemImage}
                        keyExtractor={item => item.id.toString()}
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

                    {/* Add more reviews here */}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.seeAll}>See All Reviews</Text>
                </View>
                <View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.categoryText}>Another Product</Text>
                        <Text style={styles.categoryText}>See All</Text>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={_renderItemMore}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={styles.slideContainer}
                    />
                    <View style={{ marginVertical: 20, borderRadius: 10, height: 50 }}>
                        <Pressable style={styles.btnAdd}>
                            <Text style={styles.txtAdd}>Add to cart</Text>
                        </Pressable>
                    </View>

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
        resizeMode: 'cover',
        marginTop: 29
    },
    productList: {
        height: 390,
        borderRadius: 10,
        resizeMode: 'cover',
        marginTop: 29
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