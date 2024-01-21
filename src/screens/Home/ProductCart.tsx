import React from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, Dimensions, Image,Button  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const ProductCart = () => {
  const data = [
    { key: '1', type: 'image', source: require('../../../assets/img/TMA-2.png') },
    { key: '2', type: 'image', source: require('../../../assets/img/TMA-2_2.png') },
    { key: '3', type: 'image', source: require('../../../assets/img/alcantara.png') },
    // Add more data as needed
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'image') {
      return (
        <View style={styles.slide}>
          <Image source={item.source} style={styles.image} />
        </View>
      );
    } else if (item.type === 'text') {
      return <Text style={styles.textContent}>{item.content}</Text>;
    }
    // Add more conditions for different item types
    return null;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.priceText}>USD 350</Text>
      <Text style={styles.titleText}>TMA-2</Text>
      <Text style={styles.subtitleText}>HD WIRELESS</Text>

      <View style={styles.categoriesContainer}>
        <Text style={styles.categoryText}>Overview</Text>
        <Text style={styles.categoryText}>Features</Text>
        <Text style={styles.categoryText}>Specification</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.slideContainer}
      />

      <Text style={styles.reviewTitleText}>Review (102)</Text>

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
        <Text>See All Reviews</Text>
    </View>
    <View>
   <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
  <Text style={styles.categoryText}>Another Product</Text>
  <Text style={styles.categoryText}>See All</Text>
</View>

    <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.slideContainer}
      />
<View style={{ margin: 30, borderRadius: 30 }}>
  <Button
    title="Press me"
    color="#1ebb4de2"
    onPress={() => Alert.alert('Button with adjusted color pressed')}
  />
</View>



    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  slideContainer: {
    marginTop: 20,
  },
  slide: {
    width: screenWidth,
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
    width: '90%',
    height: 200,
    resizeMode: 'cover',
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
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  reviewStarsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  reviewText: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
    marginTop: 5,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    marginTop: 20,
  },
});

export default ProductCart;