import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../../themes/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'PaymentStatusScreen'>;

const PaymentStatusScreen: React.FC<PropsType> = props => {
   const { navigation } = props;
   const _handleReceipt = () => {
      navigation.navigate('ReceiptScreen')
   }
   return (
      <View style={styles.container}>
         <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'} />
         <View style={styles.imgSuccess}>
            <Image
               style={styles.imgStatus}
               source={require('../../../assets/img/paymentStatus.png')} />
         </View>
         <View>
            <Text style={styles.txtPayment}>Payment successful!!!!</Text>
            <Text style={styles.txtThanks}>Thanks for your order</Text>
         </View>
         <Pressable style={styles.btnView} onPress={_handleReceipt}>
            <Text style={styles.txtView}>View Reciept</Text>
         </Pressable>
         <TouchableOpacity>
            <Text style={styles.txtBack}>Back to Home</Text>
         </TouchableOpacity>
      </View>
   )
}

export default PaymentStatusScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: color.White,
      paddingHorizontal: 24
   },
   txtBack: {
      fontSize: 16,
      fontFamily: 'DMSans-Bold',
      color: color.Primary,
      textAlign: 'center',
      marginTop: 25
   },
   txtView: {
      fontSize: 16,
      fontFamily: 'DMSans-Bold',
      color: color.White,
      textAlign: 'center',
   },
   btnView: {
      width: '100%',
      height: 56,
      borderRadius: 10,
      backgroundColor: color.Primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 48
   },
   txtThanks: {
      fontSize: 16,
      fontFamily: 'DMSans-Regular',
      color: 'gray',
      textAlign: 'center',
      marginTop: 12
   },
   txtPayment: {
      fontSize: 24,
      fontFamily: 'DMSans-Bold',
      color: 'black',
      textAlign: 'center',
      marginTop: 70
   },
   imgStatus: {
      height: 212,
      width: 212,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
   },
   imgSuccess: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center'
   },
})