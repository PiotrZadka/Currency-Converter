import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import ConvertButton from './Components/ConvertButton'
import InputField from './Components/InputField'

export default function App() {
  return (
    <View style={styles.container}>
      <InputField placeholder = {"Currency"}/>
      <ConvertButton title={"Convert"}/>
      <InputField placeholder = {"Converted"}/>
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

ConvertButton.propTypes = {
  title: PropTypes.string
}