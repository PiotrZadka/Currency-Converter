import React from 'react';
import ClickMeButton from './Components/ClickMeButton'
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ClickMeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
