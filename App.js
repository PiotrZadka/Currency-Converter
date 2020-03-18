import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import ClickMeButton from './Components/ClickMeButton'
import Title from './Components/Title'

export default function App() {
  return (
    <View style={styles.container}>
      <Title title={"Currency Converter"}/>
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

Title.propTypes = {
  title: PropTypes.string
}