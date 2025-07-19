import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>More Screen</Text>
    {/* Add settings, profile, and additional features here */}
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

export default MoreScreen; 