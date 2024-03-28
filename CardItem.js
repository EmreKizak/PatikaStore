import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardItem = ({saleItem}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageDiv}>
        <Image style={styles.image} source={{uri: saleItem.imgURL}} />
      </View>
      <View style={styles.textDiv}>
        <Text style={styles.title}>{saleItem.title}</Text>
        <Text style={styles.price}>{saleItem.price}</Text>
        <Text style={styles.stock}>
          {saleItem.inStock ? <></> : 'Stokta Yok'}
        </Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 20,
    height: 340,
  },
  imageDiv: {
    padding: 10,
    borderRadius: 20,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 160,
  },
  textDiv: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
