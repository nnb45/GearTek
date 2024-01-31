import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { IC_NEXT } from '../../../assets/img';
import { Product } from '../../domain/enity/product';
import { useAppContext } from '../../components/context/AppContext';
import { RouteProp, useRoute } from '@react-navigation/native';


type PropsType = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;
//interface
interface SanPham {
    id: number,
    avatar: string,
    name: string,
}

//interface
interface All {
    id: number,
    name: string,
}

interface ID {
    id: string,
}


const HomeScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const route = useRoute<RouteProp<HomeStackParamList, 'HomeScreen'>>()
    const { products, setProducts } = useAppContext();

    const _explore = () => {
        navigation.navigate('ExploreScreen')
    }
    const _search = () => {
        navigation.navigate('SearchScreen')
    }
    const _profile = () => {
        navigation.navigate('ProfileScreen');
    }
    const [all, setAll] = useState(IT)
    const [selectedIndex, setselectedIndex] = useState(1)// set mau chu 


    const [sanpham, setSanpham] = useState(SANPHAM)

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

    const renderList = ({ item }: { item: All }) => {
        const { id, name } = item
        return (
            <View style={{ marginRight: 10, marginVertical: 25 }}>
                <Text style={{
                    color: id == selectedIndex ? 'white' : 'gray',
                    backgroundColor: id == selectedIndex ? color.Primary : color.GreyLight2,
                    fontSize: 14,
                    fontFamily: 'DMSans-Regular',
                    paddingHorizontal: 15,
                    paddingVertical: 2,
                    borderRadius: 15
                }}
                    onPress={() => {
                        setselectedIndex(id)
                    }}>{name}</Text>
            </View>
        )
    }

    const renderSanpham = ({ item }: { item: Product }) => {
        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.text} numberOfLines={3} ellipsizeMode='tail'>{item.productName}</Text>
                    <TouchableOpacity style={styles.button} onPress={_explore}>
                        <Text style={styles.textBt}>Shop now</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {item.productImages && item.productImages.length > 0 && (
                        <Image source={{ uri: item.productImages[0] }} style={styles.img} />
                    )}
                </View>
            </View>
        )
    }


    const renderSanpham2 = ({ item }: { item: Product }) => {
        const _detail = () => {
            navigation.navigate('ProductDetailScreen',
                {
                    productID: item._id,
                    productName: item.productName,
                    productImage: item.productImages,
                    productPrice: item.productPrice
                });
        }
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
        <ScrollView style={styles.containerAll} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.flex3}>
                    <View style={styles.row}>
                        <View style={styles.rowlogo}>
                            <Image
                                source={require('../../../assets/img/logo.png')}
                                style={styles.logo} />
                            <Text style={styles.geartek}>
                                GearTek
                            </Text>
                        </View>
                        <Pressable onPress={_profile}>
                            <Image
                                source={require('../../../assets/img/avatar.png')}
                                style={styles.avatar} />
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.hi}>
                            Hi, Andrea
                        </Text>
                        <Text style={styles.today}>
                            What are you looking for today?
                        </Text>
                    </View>
                    <View style={styles.inputcontainer}>
                        <Pressable style={styles.top} onPress={_search}>
                            <TextInput
                                style={styles.input}
                                placeholder='Search headphone'
                                editable={false}
                                placeholderTextColor={color.Grey} />
                            <TouchableOpacity
                                style={styles.searchImage}>
                                <Image
                                    source={require('../../../assets/img/search.png')}
                                    style={styles.searchicon} />
                            </TouchableOpacity>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.flex8}>
                    <View >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            data={all}
                            renderItem={renderList}
                        />
                    </View>


                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            data={products}
                            renderItem={renderSanpham}

                        />
                    </View>

                    <View style={styles.seeall}>
                        <Text style={styles.Products}>
                            Featured Products
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.infor}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            data={products}
                            renderItem={renderSanpham2}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    containerAll: {
        flex: 1,
        backgroundColor: color.White
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
    sanpham: {
        justifyContent: 'center',
        width: 155,
        padding: 15,
        backgroundColor: color.White,
        margin: 10,
        borderRadius: 15
    },
    Products: {
        fontFamily: 'DMSans-Medium',
        color: 'black'
    },
    seeall: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    textBt: {
        color: color.Primary,
        fontFamily: 'DMSans-Bold',
    },
    button: {
        position: 'absolute',
        bottom: 1
    },
    text: {
        width: 140,
        fontSize: 20,
        fontFamily: 'DMSans-Bold',
        color: 'black',
        marginRight: 15
    },
    list: {
        flexDirection: 'row',
        padding: 25,
        backgroundColor: color.White,
        margin: 5,
        borderRadius: 8,
    },
    flex8: {
        flex: 8,
        backgroundColor: color.GreyLight1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 24
    },
    flex3: {
        flex: 3,
        padding: 24,
    },
    searchImage: {
        position: 'absolute',
        top: 12.5,
        left: 14
    },
    searchicon: {
        width: 20,
        height: 20
    },
    top: {
        marginTop: 25
    },
    input: {
        width: '100%',
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12.5,
        paddingLeft: 40,
        fontFamily: 'DMSans-Regular',
        borderWidth: 1,
        borderColor: color.Grey,
        alignItems: 'center'

    },
    inputcontainer: {
        width: '100%',
    },
    today: {
        fontSize: 24,
        fontFamily: 'DMSans-Bold',
        color: 'black'
    },
    hi: {
        marginTop: 20,
        fontFamily: 'DMSans-Medium',
        color: 'black',
        fontSize: 16,
    },
    geartek: {
        fontSize: 19,
        fontFamily: 'DMSans-Bold',
        color: 'black',
        margin: 7
    },
    avatar: {
        width: 35,
        height: 35
    },
    logo: {
        width: 20,
        height: 20
    },
    row: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowlogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,

    },
    img: {
        width: 135,
        height: 135,
        borderRadius: 12,
        margin: 8,
        alignSelf: 'center'
    },
    renderButton: {
        fontFamily: 'DMSans-Medium',
        fontSize: 14
    },
})

var IT = [
    { id: 1, name: 'Headphone' },
    { id: 2, name: 'Monitor' },
    { id: 3, name: 'Speaker' },
    { id: 4, name: 'Screen ' },
    { id: 5, name: 'Projector' },
    { id: 6, name: 'Microphone' },
    { id: 7, name: 'Headband' },
    { id: 8, name: 'Earpads' },
]



var SANPHAM = [{
    "id": 1,
    "name": "TMA-2 \nModular\nHeadphone",
    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 2,
    "name": "AIAIAI \nTMA-2DJ",

    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 3,
    "name": "Soul \nUltra \nDynamic",

    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 4,
    "name": "Gaming \nHavit \nHV-H2232D",

    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 5,
    "name": "Mpow Air \nSE Gaming \nHeadset",
    "avatar": "data:image/jpeg;base64,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"
}]

var SANPHAM2 = [{
    "id": 1,
    "name": "TMA-2 Modular",
    "price": 420,
    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 2,
    "name": "AIAIAI TMA-2DJ",
    "price": 470,
    "avatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUSEBAVFRUXFxYVFRcWFxYVFRcXGBYXFhYVGBUYHyggGR4lHhUYJTEhJSorLy4uFyAzODMtNygtLi4BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABKEAACAQMABgcDCQMICgMAAAABAgADBBEFBhIhMVEHEyJBYXGBUpGhFCMyQmJygrHwkqLBJDNDg7KzwtEINVNzdJOjw+HxFSVj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIltpC/p0ENSs4RBxJ/IAbyfAb5FetvSg2TTts0x4Yau38KY+PiOECT9KaYt7YZr1lTvAJ7R+6g7Tegmo6T6TrennqqLv8Aacikh8ict71Ehyvf16pLFtjO8nO3UbxZ275aPSQHJ7R5sSx+MCSbvpdq/wBGLdfSpVPvVgPhLRulO6PCoo8qDY+OZoDXI7p5+UDvgSEvSld91ah/WUKg+IdZkLXpUuvrW9vVH/5OyH3MSPjIuFynMe8T72Tv3frxECZbPpatyQLi2q0ifFW+J2QfTM2zRGtVndELRuF2j9Rso/orYJ9MznancuN2Qy+y/aHv4z2tFH3Uz1b+w2+m33T9X9boHUESANXekK9sW6uqTVQcadUksBzp1d5HrkeAky6saz22kKe3bvvGNum2BUQn2l5eIyDjjAzUREBERAREQEREBERAREQEREBERASx01pWna0jVqncNwA+kzHgqjvJ/wAzwEvHcKCWIAAySdwAHEkyA+kjWx7yv1dIkIMhfsp3t958egxAs9bdba99VIVsAZG7elIeynNubf8AgDAKi0x4neSd5J5kz6XWkmB3T1q5oO40ncChQH2qjnOxTT225+C8SfUgKFB6lZxSoIz1G3KiAsx9B3DnwEkDV/ofuaoD31YUAf6OnipV8i/0FPltyUNUtU7bR1LYt0yxA6yq2DUqH7Tdw5KNwmdgahoro10bQx/J+tPtVmL5803J7lmx2mi6FIYpW9JByRFX8hLyIHwqOGBMbf6vWlcYrWtF/Fqak+jYyJk4gR3pzontqgLWlRqDeySalI+jHaX0OBykY6wau3Nk2xdUsA7lde1Tb7rfwOD4TpKUL6zp1kanWRXRhhlYZB/XOBzMKi1R1db8D/WQ+J5S2s724sLgPTcpUT6LDgynuI+sp7wZunSBqO1geto5e2Y4yd7UieCue9TwDeh34J1Q0xXTqj9NRmmf8JgT1qLrhS0lR2hhKyYFWnn6JPBl5qcHB8x3TZpynq5putY3CXFHc6EhlO4Ov16beBx6EA8QJ09oPStO7oU7iicpUXI5g8GU+IIIPiDAvoiICIiAiIgIiICIiAiIgIiIGidLGsItrbqgd7gs+OOwNwX8TYHkGkHUMgF33ux2m9e70mz9J+lDc3xTPZDE/gp9hfQsGb1mqX1XAgWdZmquEQFmYhVUcWZiAqjxJIHrOl9QNVU0baLS3Gq2HruPrVCN4B9leA8BniTIk6ENA/KL1rlx2LYBhngar5CeeyAx8DsmdAQEREBERAREQERECld2yVUanUUMjgqyngQRggznnW7QL6PumpAkqMPSbmhzs58RgqfEHnOi5ofS/obrrQXCjt0GyeZpuQrj0Oy3kp5wIR01RG0tZRuqcfBxxkidB+n9irUsnPZqA1aWe51HzijzUBsfYbnNEVOso1afevzi/h4/rxltoXSDW1alcJxputQAd4ByV9RkesDqqJ4oVQ6q6nKsAynmCMgz3AREQEREBERAREQEREBLXSl11VGrV9hHf9lSf4S6mE10fZsq3ioX9plX+MDnS6fbuKrHfskUx+Eb/jmYi/qZMv6DZ6xubuf3jLCnbNWqrSQ9qo6Ul+9UYIPiYHQ3Q7ogW+jKTEdqvm4Y8w+Or/6ap8Zu8pW1BaaLTQYVFCqOQUYA9wlWAiIgIiICIiAiIgJQvbVatN6TjKurIw8GBB/OV4gcy2dE0rk0n4hnpN5jKn4iYUJskryJHuOJueu9t1OlqwAwDWSoPHrAjk+9jNTvB87VH22/OB0N0aXnXaMtmPFUNL/lM1MfBBNnmh9C9TOjsezWqAeuy3+Kb5AREQEREBERAREQEREBMFryubGt5IfdUQn8pnZj9YaHWWtdBxNKoB57Jx8cQOWlbZDD7T/2jNh6J9GG40rQ3ZWltV38kGE/fdJrelxs13QHcXz+1g/xko/6PoAq3qle0FoYb7O1WBA8MgfoQJniIgIiICIiAiIgIiICImG1k0+LNVY29artEj5pQwXGPpkndnO7yMCP+l/Q7C5t7pR2X2aTnuDK20pPmCf2JFVw2alQ83b85J2tXSE9wvyYW4oq5G0X2mYhTtALhQFOQOP5yLaXjxyc+eYE8dDNHZ0cD7dWq3uIT/BN6mr9GVNV0ZbBeGyxP3mqOzfEmbRAREQEREBERAREQEREBLbSdTZo1GPcjn3KTLmYrWpsWVyR/sKv9giByvpt813PLA9ygTO6BvnoMDb3lSiSoZnPXLTbBwd1JGLgEHiMZBmu6TJNV8DJLsAOZzgCTJV6KK9JAy39Iqi7RpvbgUwQMkMdpg448Vgb/qJeNWsqVR7tbpjt5qqhpg4dhs7BAPZxjJAzjMz80/UjWGn/APGU7i4FG3RdtOwBTpHZcrlE7skEbIzkg4mvab6XUUlbO32x7dXKg+VMb8eZHlAlGJCtv0yXQYdZbUXXku3TPoSzflJB1T17tL/CIxp1cZ6p8Andk7DcH9N+7hA2mIiAiJ5q1AqlmIVQCSScAAbySTwED1PD1FHFgPMgSHddukqrVZqVi5p0huNQbqlTxU8UXl3+XCRpcEuxZyWJ3ktvJ8yd5gdYSx01Z1K1IpRrmg5IIcLtHAO8YyOPgROctAa2XlgQbeudkcaT5ekRy2Cez5rg+MlnVjpasblSLk/Jqqgkq2WV8cerZRlj9jG0e4HjA1LpB1bq0ChqaSa6rlgaVuy1SzEnHZ+cYoNx4Yzg+M0O8oNSqujqVYE5U8QwOGU+IIk09GQS8q3WkqmHqNWalTzxpIEUkAHepO1s+SDmZo/TLYLSv9tf6RKbkci21TP90D6mBIXQ5dbejVXP83VqofVut/KoJvEjToJJ+S3HLr/j1VPPw2ZJcBERAREQEREBERAREQEttI2orUqlI7hURkJ5bSlc/GXMQOTtadHtQuGBBU5J+66nDj0YSd9Ia10rjQhuWfYNei1LC7yK5VkemB3gMG5dkZmq9Nmr28XCDc+8/fUYYfiUA+aGRxoqu5oCmXOwHZ1XO4MwVWOPHYH6JgV9s7ITabZBZlQsxVS3HZB3Du4cpZXbd0u5ZaQgWyvzlSlXK7wSCp2lIOCDuIIPcQe+WlWrjGeMorWgdD9GOvnywfJrk/yhVyrcOuUZ/fAG8d4388SFOSNG370nSrTYq6MGUjiCOE6c1N1hTSFqldcBvo1VH1KgxtDy3gjwYQM3IZ6UNczcO1nbt8yhxUYH+dcfVB9hT7yOQGdv6UdZzaUOppNitWBAI4pT4M/gTwHqe6Qbj/1A+MJ4cSqVlC4qYgWlzUxLK3rhX2u/Bxvxv55n2vULHdKOzAm7/R/0yho3NsVVWRxXL8NtXGyS2e9SgHcMFfEnSOkDTvyy7dxnZzlRv3KBs0xjnjeRzYzHapXrW7V3Xcr2z0qh5BnpsfUhCv4jM50VaFN9pBXqDKUT8oqcsg/Mp6sM+IpsIE0agaC+Q2NKiwxUI6yr/vH3keOyML5KJsURAREQEREBERAREQEREBERAxOtOifldtUpYG1jap59td6+QPA+BM5xq2/VEoMjBO47iMknGPDOPSdQ1qqopdjhVBZieAAGSTOc9brpK93VrUkKJUYsoPHfxJ8zk47s4gYeWmkBu/XdL0yhcLkEGBhK65xLbhLxzjIlvVHfA90nkjdEOs4tLvqqjYo1wEYk9lagyab7+Gd6/iHKRrTaZTQ9PafPcu/17v14QNr1q0w15c1Lg5wxwgP1aa7kHhu3nxJmHE+vxhjugeKjTE3tbJwJeXVXAmNX2j5D+JgeCuN3vnxqZAzy/KXtnbZ7R9JVqUYFS4PVW6023M/zlTwX6iyfeiXV35FYKzrirXPXVM8QGHzaHlhcZHcWac7VVLHJJOMcd/DgN86U6NdZG0hZLVq461GajVI3AsoUhsd2VZSQN2SYG1REQEREBERAREQEREBERAREQMFryxFhcbPsY9CQG+GZAmkF3A8t3vnR+k7QVqNSkeFRGTy2gRn4znS6QjapuMMCVYcmU4I9CIGNJlN+EFufGeHaBjrxMHPcZYuMbpk7pciY9x3coFBTvmw6HXFMnmT8N3+c108ZstpupIPs59++BVMpucRtShWaBZ3j5IEphdpgo8hPJfLE8hLjRY7RPKBmqVEAYEo3QwM+g85WSpLS7q5by3evfAtHGJPHQhZGno3bP9NWq1N/IbNH/tSDrS0evVSjSGXqMqIPFjgE8gOJPcATOpdD6OS2oUren9Gki0xniQoAyfE8fWBeREQEREBERAREQEREBERAREQEhnpa0C1Cv8qRfmqx7WOC1cb8/eAz57XhJmlC/s6dem1KsgdHGyyngR/Dz7oHLVY53j1lEtJM070Q3CuTZVkemTuWqSjqPZ2gCH893l3zRNZtAV7Cr1VyuCRtKRvRx37Ld+CcHl6gkMRUMsKyy7cy2qQKIYd4mZSrlV8h+UwriXVjcfVPp/lAyJeWtw+6VC0tbk7oFtncfOXdk+B6yyBlzZLkMTuUd/M9wEDIrXluKmZtOoGo9XSgrMKgpJTAVX2S4aqcHYxkbgu8/eWb1q90MU6dQPe3PXKDkUkQojY7nYsSy+AA8SRkQKPQrqkR/wDY114grbAjfg7mreoyq+BY7wwkuz4igAAAAAYAG4ADgAJ9gIiICIiAiIgIiICIiAiIgIiICIiAmE1w1dp6Qtmo1FG19Kmx4o44EHuzwPgTM3EDk3TGjnoVGpuCCpIIO4gjiCJYU7d3YIiM7HgqqWY7s7lAydwPDlOpNO6n2N64qXVsruMdoM6EgcA2wRtDwOZD+vtodGaRS4oIFWjUp16aru+ac9umBwAytRcdwaBquj9Q9J3BHV2FYDnUXqQPH53ZyPLMkbVDoVVGWrpKqtQg5FClnq/DbqEAsPAAeZEl2hWV1V0OVYBlI4EEZB9xlSBoesfRXZXJL0c21Q/7MA0yeZpHcPwlZoOkOhi/DYpVrZ17izVKbeq7DAe8yeogQvoDoPwrNf3Pa2SFW2+qc52i9Re1yxsjjxkc6G0PVvKyWdrTJcHtg5HVnPber7IXvzvzuG8gTq6eEpKCSFALfSIABOOGT3wMdqzoOlY21O2o/RQYJ4F2O9nPiSSZlIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJofS5oIV7XrgO1S7LHf/NuQDnHststnuAab5PFamHUqwyGBBHMEYIgav0W6QNfRdsSMFENA4xg9SxpAjHMID6za5GfQ/UNvVv8ARznfRrdYme9XzTbA5Zpg/wBZJMgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBGOlP5FrHb1uCXdM0WPdtEbh57dGn+3JOkb9N1sy21C8pj5y2rK6+8OP3qaj1khWdytWmlVDlXVXU81YBgfcYFaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgah0s/6ruP6v+9SZHUH/Vlj/wALb/3SxEDPREQEREBERAREQEREBERAREQERED/2Q=="
}, {
    "id": 3,
    "name": "Soul Ultra Dynamic",
    "price": 460,
    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 4,
    "name": "Gaming Havit",
    "price": 480,
    "avatar": "data:image/jpeg;base64,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"
}, {
    "id": 5,
    "name": "Gaming Headset",
    "price": 400,
    "avatar": "data:image/jpeg;base64,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"
}]