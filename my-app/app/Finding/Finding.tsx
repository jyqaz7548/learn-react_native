import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FindingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>파인딩 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default FindingScreen;
