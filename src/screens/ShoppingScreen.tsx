import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Shopping Screen</Text>
    {/* Add marketplace, wishlist, and purchase UI here */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ShoppingScreen; 