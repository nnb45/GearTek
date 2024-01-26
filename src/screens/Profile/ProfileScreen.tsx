import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../components/navigation/ProfileStack';
import { color } from '../../themes/theme';
import Header from '../../components/Header/Header';
import { AVATAR, IC_BACK } from '../../../assets/img';
import { AppContext } from '../../components/context/AppContext';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>;
const ProfileScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const {setIsLogin} = useContext(AppContext)
    return (
        <SafeAreaView style={styles.container}>
            <Header
                styleContainer={{ backgroundColor: color.White }}
                title='Profile'
                isCheck={true}
                eventLeft={() => navigation.goBack()}
                iconLeft={IC_BACK} />
            <ScrollView style={styles.profileContent} showsVerticalScrollIndicator={false}>
                <View style={styles.cardUser}>
                    <Image source={AVATAR} style={styles.avatar} />
                    <View style={styles.infoUser}>
                        <Text style={styles.heading1}>Andrea Hirata</Text>
                        <Text style={styles.email}>hirata@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.option}>
                    <View style={styles.title}>
                        <Text style={styles.heading}>General</Text>
                        <Text style={styles.body}>Edit Profile</Text>
                        <Text style={styles.body}>Notifications</Text>
                        <Text style={styles.body}>Wishlist</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.heading}>Legal</Text>
                        <Text style={styles.body}>Terms of Use</Text>
                        <Text style={styles.body}>Privacy Policy</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.heading}>Personal</Text>
                        <Text style={styles.body}>Report a Bug</Text>
                        <Text style={styles.body} onPress={()=> setIsLogin(false)}>Logout</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White
    },
    profileContent: {
        marginHorizontal: 24,
        marginBottom: 20
    },
    cardUser: {
        flexDirection: 'row',
        gap: 26,
        alignItems: 'center',
        marginTop: 30
    },
    avatar: {
        width: 75,
        height: 75
    },
    infoUser: {
        gap: 8
    },
    heading1: {
        fontFamily: 'DMSans-Regular',
        fontSize: 16,
        color: color.Default
    },
    email: {
        fontFamily: 'DMSans-Regular',
        fontSize: 14,
        color: color.GreyDark1
    },
    option: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: color.GreyLight1,
        marginTop: 35,
        marginHorizontal: -24
    },
    title: {
        marginHorizontal: 24
    },
    heading: {
        marginVertical: 20,
        fontFamily: 'DMSans-Regular',
        fontSize: 14,
        color: color.GreyDark1
    },
    body: {
        fontFamily: 'DMSans-Regular',
        fontSize: 16,
        color: color.Default,
        marginVertical: 15,
    }
})