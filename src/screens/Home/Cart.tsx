import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';

const Cart = () => {
  const [quantityItem1, setQuantityItem1] = useState(1);
  const [quantityItem2, setQuantityItem2] = useState(1);

  const decreaseQuantity = (item) => {
    if (item > 1) {
      if (item === quantityItem1) {
        setQuantityItem1(item - 1);
      } else if (item === quantityItem2) {
        setQuantityItem2(item - 1);
      }
    }
  };

  const increaseQuantity = (item) => {
    if (item === quantityItem1) {
      setQuantityItem1(item + 1);
    } else if (item === quantityItem2) {
      setQuantityItem2(item + 1);
    }
  };

  const deleteItem = (item) => {
    // Implement logic to delete the item from the cart
    // For now, let's just reset the quantity to 1
    if (item === 'item1') {
      setQuantityItem1(1);
    } else if (item === 'item2') {
      setQuantityItem2(1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.black}>My Cart</Text>
      <View style={styles.product}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../../assets/img/avatar.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.sp}>TMA-2 Comfort Wireless</Text>
            <Text style={styles.sp1}>USD 270</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => decreaseQuantity(quantityItem1)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantityItem1}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(quantityItem1)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem('item1')}>
                <Text style={styles.deleteButton}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../../assets/img/avatar.png')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.sp}>TMA-2 Comfort Wireless</Text>
            <Text style={styles.sp1}>USD 270</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => decreaseQuantity(quantityItem2)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantityItem2}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(quantityItem2)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem('item2')}>
                <Text style={styles.deleteButton}>DELETE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
        <Text>Total 2 Items</Text>
        <Text>USD 295</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button pressed')}
      >
        <Text style={{ color: 'white' }}>Press me</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text style={{ color: 'blue' }}>home</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  black: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sp: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  sp1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  product: {
    height: 450,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  quantityButton: {
    borderRadius: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 5,
    backgroundColor: 'lightgray',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  deleteButton: {
    borderRadius: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: 'red',
  },
  button: {
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#197e37d5',
    padding: 10,
  },
});

export default Cart;
