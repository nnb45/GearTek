import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView,Image,Button } from 'react-native';

const Features = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.priceText}>USD 350</Text>
        <Text style={styles.titleText}>TMA-2</Text>
        <Text style={styles.subtitleText}>HD WIRELESS</Text>

        {/* Placeholder for ScrollView content */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoryText}>Overview</Text>
          <Text style={styles.categoryText}>Features</Text>
          <Text style={styles.categoryText}>Specification</Text>
        </View>
        <View>
            <Text style={styles.Text1}>Highly Detailed Audio</Text>
            <Text style={styles.Text2}>The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers. </Text>
            <Text style={styles.Text3}>The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers. </Text>
        </View>
        <View style={styles.categoriesContainer1}>
        <Image
            source={require('../../../assets/img/APTX.png')}
            style={styles.product}
          />
          <View style={{paddingStart:10}}>
            <Text style={styles.Text4}>APTX HD WIRELESS AUDIO</Text>
            <Text style={styles.Text5}>The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better than CD quality.</Text>
          </View>
        </View>
        <View style={styles.categoriesContainer1}>
        <Image
            source={require('../../../assets/img/APTX.png')}
            style={styles.product}
          />
          <View style={{paddingStart:10}}>
            <Text style={styles.Text4}>ULTRA SOFT WITH ALCANTARA</Text>
            <Text style={styles.Text5}>Alcantara® is a highly innovative material offering an unrivalled combination of</Text>
          </View>
        </View>
        <View style={styles.button}>
        <Button
  title="Right button"
  onPress={() => Alert.alert('Right button pressed')}
  buttonStyle={styles.button2}
/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  scrollView: {
    flex: 1,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(69, 223, 69)',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
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
  categoriesContainer1:{
    flexDirection: 'row',
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    marginBottom: 8,
  },
  Text1:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    marginBottom: 8,
  },
  product: {
    width: 100,
    height: 100,
  },
  Text4:{
    width: 150,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  Text5:{
    width: 140,
  },
  button:{
    marginTop: 50,
  },
  button2: {
    borderRadius: 30,
    backgroundColor: '#000000',
  }
  
});

export default Features;
