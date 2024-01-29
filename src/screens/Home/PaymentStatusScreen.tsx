import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../../themes/theme'

const PaymentStatusScreen = () => {
   return (
      <View style={styles.container}>
         <StatusBar
            barStyle={'light-content'}
            translucent={true}
            backgroundColor={'transparent'} />
         <View style={styles.imgStatus}>
            <Image
               style={styles.imgStatus}
               source={require('../../../assets/img/paymentStatus.png')} />
         </View>
         <View>
            <Text style={styles.txtPayment}>Payment successful!!!!</Text>
            <Text style={styles.txtThanks}>Thanks for your order</Text>
         </View>
         <Pressable style={styles.btnView}>
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
      fontFamily: 'DMSans-Light',
      color: 'gray',
      textAlign: 'center',
      marginTop: 12
   },
   txtPayment: {
      fontSize: 24,
      fontFamily: 'DMSans-Bold',
      color: 'black',
      textAlign: 'center',
      marginTop: 48
   },
   imgStatus: {
      marginTop: 100,
      alignItems: 'center'
   },
   container: {
      flex: 1,
      backgroundColor: color.White,
      paddingHorizontal: 24
   }
})