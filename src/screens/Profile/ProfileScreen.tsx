import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../components/navigation/ProfileStack';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>;
const ProfileScreen: React.FC<PropsType> = props => {
    const { navigation, route } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: 'DMSans-Medium'
    }
})