import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect, useState } from 'react'
import { color } from '../../themes/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/navigation/HomeStack';
import Header from '../../components/Header/Header';
import { DELETE, IC_BACK, IC_CARD, IC_CART, IC_LOCATION, IC_NEXT, IC_ORDER, IC_WALLET } from '../../../assets/img';
import { useRoute } from '@react-navigation/native';
import { Product } from '../../domain/enity/product';
import axios from 'axios';

interface Detail {
   productID: string,
   productImages: string,
   productName: string,
   productPrice: string
}
type PropsType = NativeStackScreenProps<HomeStackParamList, 'ReceiptScreen'>;
const ReceiptScreen: React.FC<PropsType> = props => {

   const { navigation, route } = props;
   // Retrieve parameters from the route
   const { productID, productName, productPrice, productImages } = route.params as Detail
   // Use the received parameters as needed
   // ...
   const [detail, setDetail] = useState<Detail>({} as Detail);
   // Example usage:
   console.log('Received Product ID:', productID);
   console.log('Received Product Name:', productName);
   console.log('Received Product Price:', productPrice);
   console.log('Received Product Images:', productImages);

   const _handlePayment = () => {
      navigation.navigate('PaymentMethodScreen')
   }
   const _handleCheckout = () => {
      navigation.navigate('PaymentStatusScreen')
   }
   const _itemOrder = ({ item }: { item: Detail }) => {
      return (
         <View style={styles.orderItem}>
            {/* <Image source={{ uri: item.productImages }} style={styles.imgProduct} /> */}
            {item.productImages && item.productImages.length > 0 && (
               <Image source={{ uri: item.productImages[0] }}
                  style={styles.imgProduct} resizeMode='center' />
            )}
            <View style={styles.infoProduct}>
               <Text style={styles.productName}>{item.productName}</Text>
               <Text style={styles.body}>Item: 1</Text>
               <View style={styles.productOption}>
                  <Text style={styles.productPrice}>USD {item.productPrice}</Text>
                  <Image style={styles.delete} source={DELETE} />
               </View>
            </View>
         </View>
      )
   }
   return (
      <View style={styles.container}>
         <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'} />
         <Header
            title='Receipt'
            iconLeft={IC_BACK}
            iconRight={IC_CART}
            styleIconRight={{ opacity: 0 }}
            eventLeft={navigation.goBack}
            isCheck={true} />
         <ScrollView style={styles.contaninerAll}
            showsVerticalScrollIndicator={false}>
            <View style={styles.userInfo}>
               <View style={styles.grTitle}>
                  <Image source={IC_LOCATION} style={styles.receiptIcon} />
                  <Text style={styles.addressTitle}>Address</Text>
               </View>
               <View style={styles.infomation}>
                  <Text style={styles.body} numberOfLines={1} ellipsizeMode='tail'>1802 Carriage Court, Palm Springs, California</Text>
                  <Text style={styles.body}>Della Lynch</Text>
                  <Text style={styles.body}>+1 760-418-1633 </Text>
               </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.order}>
               <View style={styles.grTitle}>
                  <Image source={IC_ORDER} style={styles.receiptIcon} />
                  <Text style={styles.addressTitle}>Order</Text>
               </View>
               <FlatList
                  data={[detail]}
                  renderItem={_itemOrder}
                  contentContainerStyle={{ gap: 30 }}
                  keyExtractor={item => item.productID}
                  showsVerticalScrollIndicator={false}
               />
            </View>
            <View style={styles.line}></View>
            <View style={styles.payment}>
               <View style={styles.grTitle}>
                  <Image source={IC_WALLET} style={styles.receiptIcon} />
                  <Text style={styles.addressTitle}>Payment</Text>
               </View>
               <Pressable style={styles.paymentInfo} onPress={_handlePayment}>
                  <Text style={styles.body}>Card number: **** **** 3004 1975</Text>
                  <Image source={IC_CARD} style={styles.rightIcon} />
               </Pressable>
            </View>
         </ScrollView>
         <View style={styles.confirm}>
            <View style={styles.orderInfo}>
               <View style={styles.totalPrice}>
                  <Text style={styles.body2}>Items (2)</Text>
                  <Text style={styles.body2}>USD 295</Text>
               </View>
               <View style={styles.totalPrice}>
                  <Text style={styles.body2}>Shipping</Text>
                  <Text style={styles.body2}>USD 29</Text>
               </View>
               <View style={styles.totalPrice}>
                  <Text style={styles.body3}>Total Price</Text>
                  <Text style={styles.body3}>USD 313</Text>
               </View>
            </View>
            <Pressable style={styles.btn} onPress={_handleCheckout}>
               <Text style={styles.btnTitle}>Checkout</Text>
               <Image source={IC_NEXT} style={{ width: 25, height: 25 }} />
            </Pressable>
         </View>
      </View >
   )
}

export default ReceiptScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: color.White
   },
   contaninerAll: {
      flex: 1,
   },
   userInfo: {
      flex: 1,
      marginHorizontal: 24,
      flexDirection: 'column',
      paddingVertical: 20,
      gap: 14,
   },
   order: {
      flex: 1,
      marginHorizontal: 24,
      flexDirection: 'column',
      paddingTop: 20,
      gap: 14,
   },
   grTitle: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
   },
   receiptIcon: {
      width: 18,
      height: 18
   },
   addressTitle: {
      fontFamily: 'DMSans-Bold',
      fontSize: 16,
      color: color.Default
   },
   infomation: {
      gap: 6
   },
   body: {
      fontFamily: 'DMSans-Regular',
      fontSize: 14,
      color: color.Default
   },
   line: {
      height: 1,
      backgroundColor: color.Grey
   },
   rightIcon: {
      width: 20,
      height: 20
   },
   payment: {
      flex: 1,
      marginHorizontal: 24,
      flexDirection: 'column',
      paddingVertical: 20,
      gap: 14,
   },
   paymentInfo: {
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: color.Grey,
      borderWidth: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },
   confirm: {
      gap: 20,
      paddingVertical: 20,
      borderTopWidth: 1,
      borderStyle: 'dashed',
      borderTopColor: color.Grey,
   },
   orderInfo: {
      gap: 8
   },
   totalPrice: {
      flexDirection: 'row',
      gap: 10,
      marginHorizontal: 24,
      justifyContent: 'space-between'
   },
   body2: {
      fontFamily: 'DMSans-Medium',
      fontSize: 14,
      color: color.Default
   },
   body3: {
      fontFamily: 'DMSans-Bold',
      fontSize: 16,
      color: color.Default
   },
   btn: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: color.Primary,
      justifyContent: 'space-between',
      borderRadius: 10,
      height: 'auto',
      marginHorizontal: 24,
      paddingVertical: 15,
      paddingHorizontal: 30
   },
   btnTitle: {
      color: color.White,
      fontFamily: 'DMSans-Bold',
      fontSize: 14
   },
   // style item 
   orderItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
      marginBottom: 30
   },
   imgProduct: {
      width: 90,
      height: 90,
      borderRadius: 10
   },
   infoProduct: {
      flex: 1,
      gap: 12
   },
   productName: {
      fontFamily: 'DMSans-Medium',
      fontSize: 16,
      color: color.Default
   },
   productOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   productPrice: {
      fontFamily: 'DMSans-Bold',
      fontSize: 18,
      color: color.Primary
   },
   delete: {
      width: 20,
      height: 20
   }
})

// const orderList: orderProduct[] = [
//    {
//       id: 1,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
//    {
//       id: 2,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
//    {
//       id: 3,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
//    {
//       id: 4,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
//    {
//       id: 5,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
//    {
//       id: 6,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
//    {
//       id: 7,
//       productImage: "https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FDeluxeMajestic.png?alt=media&token=fc2b745e-ab8f-4608-8474-00972b1f18b5",
//       productName: "Moondrop Chu",
//       productPrice: 21.99
//    },
// ]