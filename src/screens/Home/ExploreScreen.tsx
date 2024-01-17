import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import { color } from '../../themes/theme';
import { CartIcons, LeftIcons, SliderIcons } from '../../../assets/icons';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'ExploreScreen'>;
const ExploreScreen: React.FC<PropsType> = props => {

    //render item list
    const _itemList = () => {
        return (
            <View style={{marginLeft: 24}}>
            <Text style={styles.txtTitle}>Popularity</Text>
        </View>
        )
    }

    const { navigation } = props
    return (
        <View style={{ flex: 1, backgroundColor: color.White, paddingHorizontal: 24, marginTop: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={navigation.goBack}>
                    <LeftIcons />
                </TouchableOpacity>
                <CartIcons />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.txtHeadphone}>Headphone</Text>
                <Text style={styles.txtTma}>TMA Wireless</Text>
            </View>

            <View style={{ marginTop: 20 , flexDirection: 'row', alignItems: 'center'}}>
                <View style={{
                    width: 100, height: 46, borderColor: color.ColorInput,
                    borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}>
                    <SliderIcons />
                    <Text style={styles.txtFilter}>Filter</Text>
                </View>
                {/* <View style={{marginLeft: 24}}>
                    <Text style={styles.txtTitle}>Popularity</Text>
                </View> */}
                <FlatList
                data={[1,2,3,4, 5]}
                renderItem={_itemList}
                horizontal
                showsHorizontalScrollIndicator={false}/>
            </View>
        </View>
    )
}


export default ExploreScreen

const styles = StyleSheet.create({
    txtTitle: {
        fontSize: 14,
        lineHeight: 20,
        color: 'black',
        fontWeight: '700',
        fontFamily: 'DMSans-Regular',
    },
    txtFilter: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular',
    },
    txtTma: {
        fontSize: 24,
        lineHeight: 32,
        color: 'black',
        fontWeight: '700',
        fontFamily: 'DMSans-Regular',
        marginTop: 12
    },
    txtHeadphone: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
        fontWeight: '400',
        fontFamily: 'DMSans-Regular'
    }
})