import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import item_data from './JSON/db.json';
import CardItem from '../CardItem';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.anaBaslik}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <View style={styles.flat}>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={item_data}
          renderItem={({item}) => <CardItem saleItem={item} />}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  anaBaslik: {
    fontSize: 24,
    color: 'purple',
    marginBottom: 10,
  },
  input: {
    padding: 15,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  flat: {},
});
