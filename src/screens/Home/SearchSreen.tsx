import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { ClockIcons, LeftIcons, MoreIconVertical, SearchIcons, StartIcons, XIcons } from '../../../assets/icons';
import { CartIcons } from '../../../assets/icons/CartIcons';
type PropsType = NativeStackScreenProps<HomeStackParamList, 'SearchScreen'>;

//render Item history search
const _itemHistorySearch = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <ClockIcons />
                <Text style={styles.txtHistory}>History</Text>
            </View>
            <XIcons />
        </View>
    )
}
//render item Popular
const _itemPopular = () => {
    return (
        <View style={{ width: '100%', height: 120, flexDirection: 'row' }}>
        <View style={{
            width: 80, height: 80, borderRadius: 10,
            backgroundColor: color.GreyLight1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Image
                style={{ width: 70, height: 70 }}
                source={require('../../../assets/img/headphone.png')} />
        </View>
        <View style={{ marginLeft: 16 }}>
            <Text style={styles.txtNameProduct}>TMA-2 Comfort Wireless </Text>
            <Text style={styles.txtPriceProduct}>USD 270</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <StartIcons />
                    <Text style={styles.txtRating}>4.6</Text>
                </View>
                <Text style={styles.txtNumberReviews}>68 Reviews</Text>
                <MoreIconVertical />
            </View>
        </View>
    </View>
    )
}
const SearchScreen: React.FC<PropsType> = props => {

    const {navigation} = props

    //handle navi

    return (
        <View style={{ flex: 1, backgroundColor: color.White, paddingHorizontal: 24, marginTop: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor:color.White }}>
                <TouchableOpacity
                activeOpacity={0.7}
                onPress={navigation.goBack}>
                  <LeftIcons />  
                </TouchableOpacity>
                
                <Text style={styles.txtSearch}>Search</Text>
                <CartIcons />
            </View>
            <View style={{
                width: '100%', height: 52, borderColor: color.ColorInput,
                borderWidth: 1, borderRadius: 10, marginTop: 24, justifyContent: 'center'
            }}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search headphone'
                />
                <View style={{ left: 15 }}>
                    <SearchIcons />
                </View>

            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.txtLastest}>Lastest search</Text>
                <FlatList
                    data={[1, 2]}
                    renderItem={_itemHistorySearch} />
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={styles.txtPopular}>Popular product</Text>
                {/* <View style={{ width: '100%', height: 120, flexDirection: 'row' }}>
                    <View style={{
                        width: 80, height: 80, borderRadius: 10,
                        backgroundColor: color.GreyLight1, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image
                            style={{ width: 70, height: 70 }}
                            source={require('../../../assets/img/headphone.png')} />
                    </View>
                    <View style={{ marginLeft: 16 }}>
                        <Text style={styles.txtNameProduct}>TMA-2 Comfort Wireless </Text>
                        <Text style={styles.txtPriceProduct}>USD 270</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <StartIcons />
                                <Text style={styles.txtRating}>4.6</Text>
                            </View>
                            <Text style={styles.txtNumberReviews}>68 Reviews</Text>
                            <MoreIconVertical />
                        </View>
                    </View>
                </View> */}
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    renderItem={_itemPopular}
                    showsVerticalScrollIndicator={false} />
            </View>

        </View>
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
        fontWeight: '700',
        fontFamily: 'DMSans-Regular',
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
    txtHistory: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
        marginLeft: 12
    },
    txtLastest: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
    },
    searchInput: {
        width: '100%',
        marginLeft: 37,
        position: 'absolute',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        color: color.ColorInput,
        fontFamily: 'DMSans-Regular'
    },
    txtSearch: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        color: 'black',
        fontFamily: 'DMSans-Bold'
    }
})

