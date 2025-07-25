import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanningScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Planning Screen</Text>
    {/* Add calendar, itinerary, and trip planning UI here */}
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

export default PlanningScreen; 