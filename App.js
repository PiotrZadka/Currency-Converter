import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import ConvertButton from './Components/ConvertButton'
import InputField from './Components/InputField'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{height: 40, fontSize: 20}} >{"Currency Converter"}</Text>
      <InputField placeholder = {"Currency"}/>
      <ConvertButton title={"Convert"}/>
      <InputField placeholder = {"Converted"} editable = {false}/>
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