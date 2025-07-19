import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WellnessScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Wellness Screen</Text>
    {/* Add spa/booking integrations and wellness features here */}
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

export default WellnessScreen; 