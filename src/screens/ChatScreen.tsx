import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chat Screen</Text>
    {/* Add real-time chat UI and logic here */}
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

export default ChatScreen; 