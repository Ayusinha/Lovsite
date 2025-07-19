import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Auth Screen (Login/Signup)</Text>
    {/* Add authentication form here */}
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

export default AuthScreen; 